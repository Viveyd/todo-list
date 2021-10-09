import { pubSub } from "./sample1.js";
import'./index.css';
import { add } from "date-fns";

const App = (function(){
    // Initialize core object factory functions
    const Projects = {
        list : [],
        consoleView: function(){
            console.log(`You currently have ${this.list.length} projects.`)
        }
    };
    const Project = {
        type: 'project',
        init: function(title, desc, startDate, dueDate, prio, status){
            this.title = title;
            this.description = desc;
            this.startDate = startDate;
            this.dueDate = dueDate;
            this.priority = prio;
            this.status = status;
            
            //Pre-set properties
            this.ctor = Project
            this.tasks = [];
            this.list = this.tasks;
            this.parentObj = Projects;
            
            pubSub.publish('projectAdded', this);
            return this;
        },
        create: function() {
            let newProject = Object.create(this);
            return newProject;
        },
        update: function(title, desc, startDate, dueDate, prio, status){
            this.title = title;
            this.description =desc;
            this.startDate = startDate;
            this.dueDate = dueDate;
            this.priority = prio;
            this.status = status;
        },
        consoleView: function(){
            console.log(`Project: ${this.title}`);
            console.log(`Description: ${this.description}`);
            console.log(`Status: ${this.status}`);
            console.log(`Tasks:`);
            this.tasks.forEach(task => {
                console.log(task.title);
            });
            console.log(`Start Date: ${this.startDate} Due Date:${this.dueDate}`)
            console.log(`Project Priority: ${this.priority}`);
        },
    }
    const Task = {
        type: 'task',
        init: function(title, desc, startDate, dueDate, prio, project, status) {
            this.title = title;
            this.description =desc;
            this.startDate = startDate;
            this.dueDate = dueDate;
            this.priority = prio;
            this.project = project;
            this.status = status;

            //Pre-set properties
            this.ctor = Task;
            this.parentObj = this.project;
            
            pubSub.publish('taskAdded', this, project);
            return this;
        },
        create: function(){
            let newTask = Object.create(this);
            return newTask;
        },
        update: function(title, desc, startDate, dueDate, prio, status){
            this.title = title;
            this.description =desc;
            this.startDate = startDate;
            this.dueDate = dueDate;
            this.priority = prio;
            this.status = status;
        },
        consoleView: function(){
            console.log(`Project: ${this.project.title}`);
            console.log(`Task: ${this.title}`);
            console.log(`Description: ${this.description}`);
            console.log(`Status: ${this.status}`);
            console.log(`Start Date: ${this.startDate} Due Date:${this.dueDate}`);
            console.log(`Task Priority: ${this.priority}`);
        },
    }

    // Subscribe methods
    pubSub.subscribe('createThat', ([constructor, argsArr])=>{
        let newObj = constructor.create();
        newObj.init.apply(newObj, argsArr);
        console.log(`You've created a new ${constructor.type}: ${argsArr[0]}.`)
    })
    pubSub.subscribe('updateThat', ([target, updatedValues]) => {
        target.update.apply(target, updatedValues)
    })
    pubSub.subscribe('deleteThat', ([target])=>{
        let objStorage = target.parentObj.list;
        objStorage.splice(objStorage.indexOf(target), 1);
        console.log(`You've deleted the ${target.ctor.type}: ${target.title}.`)
    })
    pubSub.subscribe('projectAdded', ([project])=>{
        Projects.list.push(project);
    })
    pubSub.subscribe('taskAdded', ([task, project])=>{
        project.tasks.push(task);
    })

    // Interface of DOM to object logic
    function requestCreate(ctor, objArgs){
        pubSub.publish('createThat', ctor , [... arguments].slice(1));
    }
    function requestDelete(target){
        pubSub.publish('deleteThat', target)
    }
    function requestUpdate(target, updatedValues){
        pubSub.publish('updateThat', target, [... arguments].slice(1))
    }

    // Used for tests on console trying out functionality
    function viewInConsole(object){ 
        console.log('*****************')
        object.consoleView();
    }

    

    function simulate(){
        //Populate project storage
        requestCreate(Project, 'sampleProj', 'for testing', 'today', 'tommorow', 'high', 'started') ;   
            requestCreate(Task, 'SampleTask1', 'first task', 'today', 'max', 'high', Projects.list[0], 'started');
            requestCreate(Task, 'SampleTask2', 'second task', 'today', 'max', 'high', Projects.list[0], 'started');
        requestCreate(Project, 'myProj', 'for testing', 'today', 'tommorow', 'high', 'started');   
            requestCreate(Task, 'SampleTask1', 'first task', 'today', 'max', 'high', Projects.list[1], 'started');
            requestCreate(Task, 'SampleTask2', 'second task', 'today', 'max', 'high', Projects.list[1], 'started');

            
        // Initialize and render html body
        let body = document.querySelector('body')
        let header, headerNav, main, mainViewProj, mainViewTask, footer;
        let projectSelected = true;
        let currentProj = {

        }
        let currentTask = {

        }

        pubSub.subscribe('initBody', initBody);
        pubSub.publish('initBody');
        pubSub.subscribe('renderBody', renderBody);
        pubSub.publish('renderBody');
        pubSub.subscribe('viewProject', viewProject);

        function viewProject([project]){
            //Set details in project view
            currentProj.title = project.title;
            currentProj.desc = project.description;
            currentProj.start = project.startDate;
            currentProj.due = project.dueDate;
            currentProj.prio = project.priority;
            currentProj.status = project.status;
            currentProj.setDetails();
            //Clear tasks from previously viewed project
            if(currentProj.tasksCon.children.length != 0){
                while(currentProj.tasksCon.firstElementChild) currentProj.tasksCon.removeChild(currentProj.tasksCon.firstElementChild);
            }
            //Set tasks. Add an li to ul(tasks) for each task present on the project
            for(let i = 0; i < project.tasks.length; i++)
            {
                let storedTask = project.tasks[i];
                let newTask =document.createElement('li');
                newTask.classList.add('view-task-li');
                //Add bottom borders to each task except the last
                if(i < project.tasks.length-1) newTask.classList.add('bottom-bordered');
                newTask.textContent = storedTask.title;
                currentProj.tasksCon.appendChild(newTask);
            }

            mainViewProj.style.background = 'gray';

            toggleScrolling();
            updateHeader();
            toggleLogoButton();
            
            
            body.appendChild(mainViewProj);
        }

        function updateHeader(){
            let leftHeader = header.firstElementChild;
            let headerTitle = leftHeader.lastElementChild;
            headerTitle.style.display = 'none';

            let rightHeader = header.firstElementChild.nextElementSibling;
            let projectNameCon = rightHeader.firstElementChild;
            let projectName = projectNameCon.firstElementChild;
            projectName.textContent = currentProj.title;

            let headerAddCon = rightHeader.lastElementChild;
            projectNameCon.style.display = 'block';
            headerAddCon.style.display = 'none';
        }

        function revertHeaderDefault(){
            let leftHeader = header.firstElementChild;
            let headerTitle = leftHeader.lastElementChild;
            headerTitle.style.display = 'grid';
            let rightHeader = header.firstElementChild.nextElementSibling;
            let projectNameCon = rightHeader.firstElementChild;
            let headerAddCon = rightHeader.lastElementChild;
            projectNameCon.style.display = 'none';
            headerAddCon.style.display = 'flex';
        }

        function toggleLogoButton(){
            let destCon = header.firstElementChild.firstElementChild;
            let anchor = document.createElement('a');
            anchor.textContent = 'Back';
            anchor.addEventListener('click', ()=>{
            body.removeChild(mainViewProj);
            anchor.parentElement.removeChild(anchor);    
            toggleScrolling();
            revertHeaderDefault();
            });
            destCon.appendChild(anchor);
        }


        function toggleScrolling(){
            if(document.documentElement.style.overflow == '' || document.documentElement.style.overflow == 'visible' ){
                document.documentElement.style.overflow = "hidden";
            }
            else{
                document.documentElement.style.overflow = 'visible';
            }
            
        }

        function initViewProj(){
            let wrapper = document.createElement('div');
            
            let detailsCon = document.createElement('div');
                // let titleLabel = document.createElement('label');
                // titleLabel.textContent = 'Title:';
                // let title = document.createElement('p');
                // title.textContent = 'Placeholder';
                // titleLabel.appendChild(title);

                let descLabel = document.createElement('label');
                descLabel.textContent = 'Description:';
                let desc = document.createElement('p');
                desc.textContent = 'Placeholder';
                descLabel.appendChild(desc);

                let startLabel = document.createElement('label');
                startLabel.textContent = 'Start Date:';
                let start = document.createElement('p');
                start.textContent = 'Placeholder';
                startLabel.appendChild(start);

                let dueLabel = document.createElement('label');
                dueLabel.textContent = 'Due Date:';
                let due = document.createElement('p');
                due.textContent = 'Placeholder';
                dueLabel.appendChild(due);

                let priorityLabel = document.createElement('label');
                priorityLabel.textContent = 'Priority:';
                let prio = document.createElement('p');
                prio.textContent = 'Placeholder';
                priorityLabel.appendChild(prio);

                let statusLabel = document.createElement('label');
                statusLabel.textContent = 'Status:';
                let stat = document.createElement('p');
                stat.textContent = 'Placeholder';
                statusLabel.appendChild(stat);

            // // detailsCon.appendChild(titleLabel);    
            detailsCon.appendChild(descLabel);
            detailsCon.appendChild(startLabel);
            detailsCon.appendChild(dueLabel);
            detailsCon.appendChild(priorityLabel);
            detailsCon.appendChild(statusLabel);
            currentProj.setDetails = function (){
                // title.textContent = currentProj.title;
                desc.textContent = currentProj.desc;
                start.textContent = currentProj.start;
                due.textContent = currentProj.due;
                prio.textContent = currentProj.prio;
                stat.textContent = currentProj.status;
            }

            let tasksCon = document.createElement('div');
            let tasks = document.createElement('ul');
            tasks.setAttribute('id', 'view-tasks-ul');
            tasksCon.appendChild(tasks)
            currentProj.tasksCon = tasks;

            wrapper.appendChild(detailsCon);
            wrapper.appendChild(tasksCon);
            mainViewProj = wrapper;
            mainViewProj.setAttribute('id', 'main-view-proj')
        }

        function initBody(){
            initHeader();
            initMain();
            initViewProj();
            initFooter();
            
        }

        function renderBody(){
            body.appendChild(header);
            body.appendChild(main);
            body.appendChild(footer);
        }

        // Header Functions - START
        function initHeader(){
            let newHeader = document.createElement('header');

            let headerLeft = document.createElement('div');
            headerLeft.setAttribute('id', 'left-header');
                let logoCon = document.createElement('div');
                logoCon.setAttribute('id', 'header-logo-con');
                let headerTitle = document.createElement('h1');
                headerTitle.setAttribute('id', 'header-title');
                headerTitle.textContent = 'Boogie Reminds'
            headerLeft.appendChild(logoCon);
            headerLeft.appendChild(headerTitle);

            let headerRight = document.createElement('div');
            headerRight.setAttribute('id'
            , 'right-header');

                let projectNameCon = document.createElement('div');
                    let projectName = document.createElement('h2');
                    projectName.textContent = 'Project';
                projectNameCon.appendChild(projectName);
                projectNameCon.setAttribute('id', 'proj-name-con');

                let headerAddCon = document.createElement('div');
                headerAddCon.setAttribute('id', 'header-add-con');
                    let headerAdd = document.createElement('a');
                    headerAdd.setAttribute('id', 'header-add');
                    headerAdd.textContent = '+';
                //hover and toggle dropdown functions
                headerAddCon.addEventListener('mouseover', ()=> {
                    if(headerAddCon.getAttribute('data-state') != 'toggled-on')headerAddCon.setAttribute('data-state', 'hover-on');
                    renderDropdown(headerAddCon)
                });
                headerAddCon.addEventListener('mouseleave', ()=> {
                    if(headerAddCon.contains(headerNav) && headerAddCon.getAttribute('data-state') != 'toggled-on'){
                        headerAddCon.removeChild(headerNav);
                        headerAddCon.setAttribute('data-state', 'hover-off');
                    }
                    else return 0;
                });
                headerAddCon.addEventListener('click', ()=> toggleDropdown(headerAddCon));
                headerAddCon.appendChild(headerAdd); 

            headerRight.appendChild(projectNameCon);
            headerRight.appendChild(headerAddCon);

            newHeader.appendChild(headerLeft);
            newHeader.appendChild(headerRight);
            initDropDown();
            header = newHeader;
        }

        
        function initDropDown(){
            let dropDownCon = document.createElement('div');
            dropDownCon.setAttribute('id', 'drop-down-con');
            let dropDownUL = document.createElement('ul');
            let dropDownItems = ['New project', 'New task'];
            for(let item of dropDownItems){
                if(item == 'New task' && projectSelected == false) return 0;
                else{
                    let newItemCon = document.createElement('li');
                newItemCon.classList.add('dropdown-li')
                let newItem = document.createElement('a');
                newItem.classList.add('dropdown-anchor')
                newItem.textContent = item;
                newItem.href = '';
                newItemCon.appendChild(newItem);
                dropDownUL.appendChild(newItemCon);
            }
            }
            dropDownCon.appendChild(dropDownUL);
            headerNav = dropDownCon;
        }
        function renderDropdown(that){
            if(that.children.length == 2){
                return 0;
            }
            else{
                that.appendChild(headerNav);        
            }
        }
        function toggleDropdown(that){
            if(that.getAttribute('data-state') == 'hover-on') that.setAttribute('data-state', 'toggled-on');
            else if(that.children.length == 2){
                that.removeChild(headerNav);
                that.setAttribute('data-state', 'hover-off');
            }
            else{
                that.appendChild(headerNav);   
            }
        }
        // Header Functions - END


        // Main Functions - START
        function initMain(){
            let newMain = document.createElement('main');
            
            let mainHeaderWrapper = document.createElement('div');
            mainHeaderWrapper.setAttribute('id', 'main-header-wrapper');
            

            let mainTitle = document.createElement('h1');
            mainTitle.setAttribute('id', 'main-title');
            mainTitle.textContent = 'Your projects';
            mainHeaderWrapper.appendChild(mainTitle);

            let mainSettingsWrapper = document.createElement('div');
            mainSettingsWrapper.setAttribute('id', 'main-settings-wrapper');
                let mainSettings = ['Filter ongoing', 'Filter finished', 'Filter due today', 'Filter due this week', 'Sort by start date', 'Sort by due date'];
                for(let setting of mainSettings){
                    let settingBtn = document.createElement('button');
                    settingBtn.classList.add('setting-btn');
                    settingBtn.textContent = setting;
                    mainSettingsWrapper.appendChild(settingBtn);
                }
            mainHeaderWrapper.appendChild(mainSettingsWrapper);

            let projectsCon = document.createElement('div');
            projectsCon.setAttribute('id', 'main-projects-con');
            for(let project of Projects.list){
                let container = document.createElement('div');
                container.classList.add('proj-con');

                let title = document.createElement('h2');
                title.textContent = project.title;
                container.appendChild(title);
                
                let viewBtn = document.createElement('button');
                viewBtn.classList.add('proj-view-btn');
                viewBtn.textContent = 'View project details';
                viewBtn.addEventListener('click', () => pubSub.publish('viewProject', project));
                container.appendChild(viewBtn);
                
                projectsCon.appendChild(container);
            }
            
            newMain.appendChild(mainHeaderWrapper);
            newMain.appendChild(projectsCon);
            main = newMain;
        }
        // Main Functions - END


        // Footer Functions - START
        function initFooter(){
            let newFooter = document.createElement('footer');
            let tag = document.createElement('h2');
            tag.setAttribute('id', 'footer-tag');
            tag.textContent = 'Copyright © Viveyd 2021';
            newFooter.appendChild(tag);
            footer = newFooter;
        }
        // Footer Functions - END


        function unrenderBody(){
            body.removeChild(header);
            body.removeChild(main);
            body.removeChild(footer);
        }

    }

    return {
        simulate,
    }
})();

App.simulate();
