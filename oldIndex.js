import { pubSub } from "./sample1.js";
import'./index.css';
import expandURL from './expand.png';
import { add } from "date-fns";
import daysToWeeks from "date-fns/daysToWeeks";

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
        let header, headerNav, main, mainViewProj, taskDropDown, addForm, footer;
        let objToCreate;
        let lastProjSelected;
        let lastConSelected;
        let currentProj = {

        }
        let currentTask = {

        }
        let taskCon;

        pubSub.subscribe('initBody', initBody);
        pubSub.publish('initBody');
        pubSub.subscribe('renderBody', renderBody);
        pubSub.publish('renderBody');
        pubSub.subscribe('viewProject', viewProject);
        pubSub.subscribe('viewTask', viewTask);

        function initBody(){
            initHeader();
            initCreateForm();
            initMain();
            initMainView();
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
                
                
            
                let newItemCon = document.createElement('li');
                
                newItemCon.classList.add('dropdown-li')
                let newItem = document.createElement('a');
                newItem.classList.add('dropdown-anchor')
                newItem.textContent = item;
                newItem.href = '';
                newItem.addEventListener('click', (e) => createNew(e, item));
                newItemCon.appendChild(newItem);
                if(item == 'New task') {
                    taskCon = newItemCon;
                    newItemCon.setAttribute('id', 'new-task-con')};
                dropDownUL.appendChild(newItemCon);
            
            }
            dropDownCon.appendChild(dropDownUL);
            headerNav = dropDownCon;
        }

        function createNew(e, item){
            e.preventDefault();
            objToCreate = (item == 'New project') ? Project: Task;
            renderCreateForm();
        }

        function renderCreateForm(){
            body.appendChild(addForm);
            scrollable(false);
            loadHeader(2)
        }
        
        function unrenderCreateForm(){
            removeBackBtn();
            returnToPrevious();
        }

        

        function initCreateForm(){
            let newForm = document.createElement('form');
            newForm.setAttribute('id', 'add-form');
            
            let titleLabel = document.createElement('label');
            titleLabel.textContent  = 'Title:';
                let titleInput = document.createElement('input');
            titleLabel.appendChild(titleInput)

            let descLabel = document.createElement('label');
            descLabel.textContent  = 'Description:';
                let descInput = document.createElement('input');
                descLabel.appendChild(descInput)

            let startLabel = document.createElement('label');
            startLabel.textContent  = 'Start Date:';
                let startInput = document.createElement('input');
                startInput.type = 'date';
                
            startLabel.appendChild(startInput)

            let dueLabel = document.createElement('label');
            dueLabel.textContent  = 'Due Date:';
                let dueInput = document.createElement('input');
                dueInput.type = 'date';
                if(objToCreate == 'New task'){
                    dueInput.min = currentProj.startDate;
                    dueInput.max = currentProj.dueDate;
                }
            dueLabel.appendChild(dueInput)

            let prioLabel = document.createElement('label');
            prioLabel.textContent  = 'Priority:';
                let prioInput = document.createElement('input');
            prioLabel.appendChild(prioInput)

            let statLabel = document.createElement('label');
            statLabel.textContent  = 'Status:';
                let statInput = document.createElement('input');
            statLabel.appendChild(statInput);

            let inputFields = [titleInput, descInput, startInput, dueInput, prioInput, statInput];

            let submitBtn = document.createElement('button');
            submitBtn.textContent = 'Add/Update';
            submitBtn.addEventListener('click', (e)=> {
                e.preventDefault();
                if(inputFields.every(inputBox => inputBox.value != 0)){
                    console.log(`requestCreate(${objToCreate}, ${titleInput.value}, ${descInput.value}, ${startInput.value},  ${dueInput.value}, ${prioInput.value}, ${statInput.value})`);
                    if(objToCreate == Project) requestCreate(objToCreate, titleInput.value, descInput.value, startInput.value, dueInput.value, prioInput.value, statInput.value);   
                    else if(objToCreate == Task) requestCreate(objToCreate, titleInput.value, descInput.value, startInput.value, dueInput.value, prioInput.value, lastProjSelected, statInput.value); 
                    clearInputFields(inputFields);
                    clearProjectsCon();
                    renderProjectsTo(main.lastElementChild);
                    unrenderCreateForm();
                }
                else{
                    console.log('Some fields are invalid.');
                }
            })


            newForm.appendChild(titleLabel);
            newForm.appendChild(descLabel);
            newForm.appendChild(startLabel);
            newForm.appendChild(dueLabel);
            newForm.appendChild(prioLabel);
            newForm.appendChild(statLabel);
            newForm.appendChild(submitBtn);


            addForm = newForm;
        }
        function clearInputFields(arr){
            arr.forEach(field => field.value = '');
        }

        function clearProjectsCon(){
            while(main.lastElementChild.firstElementChild) main.lastElementChild.removeChild(main.lastElementChild.firstElementChild);
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
            newMain.setAttribute('data-showing', 'project-list');
            
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
            renderProjectsTo(projectsCon);
            

            newMain.appendChild(mainHeaderWrapper);
            newMain.appendChild(projectsCon);
            main = newMain;
        }
        // Stores the project view /task view html into a variable for rendering/unrendering
        function initMainView(){
            let wrapper = document.createElement('div');
            
            let detailsCon = document.createElement('div');
            detailsCon.setAttribute('id', 'proj-details-con');
                let topCon = document.createElement('div');
                topCon.setAttribute('id', 'proj-details-top');
                    let leftCon = document.createElement('div');
                    leftCon.setAttribute('id', 'proj-details-left');
                        let descLabel = document.createElement('label');
                        descLabel.textContent = 'Description:';
                        let desc = document.createElement('p');
                        desc.textContent = 'Placeholder';
                        descLabel.appendChild(desc);
                    leftCon.appendChild(descLabel);    

                    let rightCon =document.createElement('div');
                    rightCon.setAttribute('id', 'proj-details-right');
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
                    rightCon.appendChild(startLabel);
                    rightCon.appendChild(dueLabel);
                    rightCon.appendChild(priorityLabel);
                topCon.appendChild(leftCon);
                topCon.appendChild(rightCon);

                let botCon = document.createElement('div');
                botCon.setAttribute('id', 'proj-details-bot');
                    let statusLabel = document.createElement('label');
                    statusLabel.textContent = 'Status:';
                    let stat = document.createElement('p');
                    stat.textContent = 'Placeholder';
                    statusLabel.appendChild(stat);
                botCon.appendChild(statusLabel);

            detailsCon.appendChild(topCon);
            detailsCon.appendChild(botCon);    
            // // detailsCon.appendChild(titleLabel);    
            
            

         
            currentProj.setDetails = function (){
                // title.textContent = currentProj.title;
                desc.textContent = currentProj.description;
                start.textContent = currentProj.startDate;
                due.textContent = currentProj.dueDate;
                prio.textContent = currentProj.priority;
                stat.textContent = currentProj.status;
                tasksCon.style.display = 'block'
            }
            currentTask.setDetails = function(){
                desc.textContent = currentTask.description;
                start.textContent = currentTask.startDate;
                due.textContent = currentTask.dueDate;
                prio.textContent = currentTask.priority;
                stat.textContent = currentTask.status;
                tasksCon.style.display = 'none'
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

        // Requests to view project/task
        function requestTaskView(){
            pubSub.publish('viewTask');
        }
        function requestProjectView(){
            pubSub.publish('viewProject');
        }

        function viewProject(){
            main.setAttribute('data-showing', 'project');
            main.classList.add('hidden');
            footer.classList.add('hidden');
            scrollable(true);
            loadHeader(1);

            //Set details in project view
            currentProj.setDetails();

            //Clear tasks from previously viewed project
            if(currentProj.tasksCon.children.length != 0){
                while(currentProj.tasksCon.firstElementChild) currentProj.tasksCon.removeChild(currentProj.tasksCon.firstElementChild);
            }
            //Set tasks. Add an li to ul(tasks) for each task present on the project
            for(let i = 0; i < currentProj.tasks.length; i++)
            {
                // Add a ul heading 
                if(i == 0){
                    let ulHeading = document.createElement('li');
                    ulHeading.textContent = 'TASKS'
                    ulHeading.classList.add('bottom-bordered')
                    ulHeading.style.textAlign = 'center';
                    ulHeading.style.fontWeight = 'bolder';
                    currentProj.tasksCon.appendChild(ulHeading);
                }


                let storedTask = currentProj.tasks[i];
                let newTask =document.createElement('li');
                newTask.classList.add('view-task-li');
                newTask.setAttribute('data-expand', 'false');
                    let taskPreview =document.createElement('div');
                    taskPreview.classList.add('task-preview')
                        let taskName = document.createElement('h3');
                        taskName.textContent = storedTask.title;
                        let expandBtn = document.createElement('a');
                            let expandIcon = getImage(expandURL);
                            expandIcon.classList.add('expand-icon')
                        expandBtn.appendChild(expandIcon);
                        expandBtn.href = '';
                        expandBtn.addEventListener('click', (e) => {
                            e.preventDefault();
                            if(newTask.getAttribute('data-expand') == 'true'){
                                removeTaskDetails(newTask);
                                newTask.setAttribute('data-expand', 'false');
                            }else{
                                
                                Object.assign(currentTask, storedTask);
                                newTask.appendChild(getTaskDetails());
                                newTask.setAttribute('data-expand', 'true');
                            }
                            
                        });
                    taskPreview.appendChild(taskName);
                    taskPreview.appendChild(expandBtn);
                newTask.appendChild(taskPreview);
                
                //Add bottom borders to each task except the last
                if(i < currentProj.tasks.length-1) newTask.classList.add('bottom-bordered');
                // newTask.textContent = storedTask.title;
                // newTask.addEventListener('click', ()=> {
                    
                //     // requestTaskView();
                // });
                currentProj.tasksCon.appendChild(newTask);
            }
            
            body.appendChild(mainViewProj);
        }

        function getTaskDetails(){
            let div = document.createElement('div');
            div.classList.add('task-drop-down');

                let descCon = document.createElement('div');
                    let descLabel = document.createElement('label');
                    descLabel.textContent = 'Description';
                    let desc = document.createElement('p');
                    desc.classList.add('task-detail');
                    desc.textContent = currentTask.description;
                    descLabel.appendChild(desc)
                descCon.appendChild(descLabel);
                let dateCon = document.createElement('div');
                    let dateLabel = document.createElement('label');
                    dateLabel.textContent = 'Date';
                    let date = document.createElement('p');
                    date.classList.add('task-detail');
                    date.textContent = `Start Date: ${currentTask.startDate}. Due Date: ${currentTask.dueDate}.`;
                    dateLabel.appendChild(date)
                dateCon.appendChild(dateLabel);
                let prioCon = document.createElement('div');
                    let prioLabel = document.createElement('label');
                    prioLabel.textContent = 'Priority';
                    let prio = document.createElement('p');
                    prio.classList.add('task-detail');
                    prio.textContent = `${currentTask.priority} level of priority`;
                    prioLabel.appendChild(prio)
                prioCon.appendChild(prioLabel);
                let statusCon = document.createElement('div');
                    let statusLabel = document.createElement('label');
                    statusLabel.textContent = 'Status';
                    let status = document.createElement('p');
                    status.classList.add('task-detail');
                    status.textContent = currentTask.status;
                    statusLabel.appendChild(status)
                statusCon.appendChild(statusLabel); 
                let actionsCon = document.createElement('div');
                    let actionsLabel = document.createElement('label');
                    actionsLabel.textContent = 'Actions available';
                    let actions = document.createElement('p');
                    actions.classList.add('task-detail');
                        let a1 = document.createElement('a');
                        a1.textContent = 'Edit';
                        a1.href = '';
                        a1.addEventListener('click', (e)=>{
                            e.preventDefault();
                            let descInput = document.createElement('input');
                            descInput.classList.add('task-detail');
                            let dateInput = document.createElement('input');
                            dateInput.classList.add('task-detail');
                            let prioInput = document.createElement('input');
                            prioInput.classList.add('task-detail');
                            let statusInput = document.createElement('input');
                            statusInput.classList.add('task-detail');
                            if(a1.textContent == 'Edit'){
                                a1.textContent = 'Save';

                                
                                descLabel.replaceChild(descInput, descLabel.children[0]);
                                dateLabel.replaceChild(dateInput, dateLabel.children[0]);
                                prioLabel.replaceChild(prioInput, prioLabel.children[0]);
                                statusLabel.replaceChild(statusInput, statusLabel.children[0]);
                            }    
                            else{
                                a1.textContent = 'Edit'

                                
                                let taskLi = [... document.querySelectorAll('.view-task-li')].filter(li => li.contains(a2))[0];
                                let taskLiCon = taskLi.parentElement;
                                let indexInProj = [... taskLiCon.children].indexOf(taskLi)-1;
                                requestUpdate(currentProj.list[indexInProj], currentProj.title, descInput.value, dateInput.value, prioInput.value, currentProj, statusInput.value)

                                desc.textContent = currentTask.description;
                                date.textContent = `${currentTask.startDate} ${currentTask.dueDate}`;
                                prio.textContent = `${currentTask.priority} level of priority.`;
                                status.textContent = currentTask.status;
                                descLabel.replaceChild(desc, descLabel.children[0]);
                                dateLabel.replaceChild(date, dateLabel.children[0]);
                                prioLabel.replaceChild(prio, prioLabel.children[0]);
                                statusLabel.replaceChild(status, statusLabel.children[0]);
                            };
                            
                        })
                        a1.classList.add('actions-btn');
                        let a2 = document.createElement('a');
                        a2.textContent = 'Delete';
                        a2.href = '';
                        a2.addEventListener('click', (e)=>{
                            e.preventDefault();
                            
                            //Removes from DOM
                            let taskLi = [... document.querySelectorAll('.view-task-li')].filter(li => li.contains(a2))[0];
                            let taskLiCon = taskLi.parentElement;
                            let indexInProj = [... taskLiCon.children].indexOf(taskLi)-1;
                            taskLiCon.removeChild(taskLi);

                            //Remove task from Project.list
                            requestDelete(currentProj.list[indexInProj]);

                        })
                    actions.appendChild(a1);
                    actions.appendChild(a2);
                    actionsLabel.appendChild(actions)
                actionsCon.appendChild(actionsLabel);
                let markButton = document.createElement('button');
                markButton.textContent = 'Mark as finished';
                
            div.appendChild(descCon);
            div.appendChild(dateCon);
            div.appendChild(prioCon);
            div.appendChild(statusCon);
            div.appendChild(actionsCon);
            div.appendChild(markButton);

            return div;
        }

        function removeTaskDetails(task){
            task.removeChild(task.lastElementChild);
        }

        function getImage(imageURL){
            let newImg = document.createElement('img');
            newImg.src=imageURL;
            return newImg;
        }

        function viewTask(){
            // main.setAttribute('data-showing', 'task');
            // currentTask.setDetails();
            // // while(currentProj.tasksCon.firstElementChild) currentProj.tasksCon.removeChild(currentProj.tasksCon.firstElementChild);
        }

        function loadHeader(num){
            let leftHeader = header.firstElementChild;
            let headerTitle = leftHeader.lastElementChild;
            let rightHeader = leftHeader.nextElementSibling;
            let projectNameCon = rightHeader.firstElementChild;
            let projectName = projectNameCon.firstElementChild;
            let headerAddCon = rightHeader.lastElementChild;
            projectName.textContent = currentProj.title;

            //Default header
            if(num == 0){
                projectNameCon.style.display = 'none';
                headerTitle.style.fontSize = '2em';
                headerAddCon.style.display = 'flex';
               

            } 
            //Custom header for viewing project & task. 
            else if (num == 1){
                attachBackBtn();
                projectNameCon.style.display = 'flex';
                headerTitle.style.fontSize = '0px';
                headerAddCon.style.display = 'none';
            }
            else if (num == 2){
                attachBackBtn();
                projectNameCon.style.display = 'flex';
                headerTitle.style.fontSize = '0px';
                headerAddCon.style.display = 'none';
                projectName.textContent = `Create new ${capitalize(objToCreate.type)}`;
            }
        }

        function capitalize(str){
            str = [... str];
            str[0] = str[0].toUpperCase();
            return str.join('');
        }
        
        
        // Attaches a return button
        function attachBackBtn(){
            let wrapper = header.firstElementChild.firstElementChild;
            let backBtn = document.createElement('a');
            backBtn.classList.add('anchor-btn');
            backBtn.textContent = 'Back';

            backBtn.addEventListener('click', () => {
                removeBackBtn();
                returnToPrevious();
            });
            wrapper.appendChild(backBtn);
        }

        function removeBackBtn(){
            let backBtn = header.querySelector('.anchor-btn');
            backBtn.parentElement.removeChild(backBtn);
        }

        function returnToPrevious(){
            if(isViewingProject()){
                returnToMain();
            }
            else if(isViewingTask()) {
                returnToProject()
            }
            else{
                returnToMain();
            }
        }
            
        //Sub functions
        function returnToMain(){
            body.removeChild(body.lastElementChild);
            main.classList.remove('hidden');
            footer.classList.remove('hidden');
            loadHeader(0);
            scrollable(true);
        }
        function returnToProject(){
            requestProjectView();
        }

        function isViewingTask(){
            return main.getAttribute('data-showing') == 'task';
        }
        function isViewingProject(){    
            return main.getAttribute('data-showing') == 'project';
        }
        function scrollable(bool){
            (bool == true) ? document.documentElement.style.overflow = 'auto' : document.documentElement.style.overflow = 'hidden';       
        }
        function renderProjectsTo(parent){
            for(let project of Projects.list){
                let container = document.createElement('div');
                container.classList.add('proj-con');
                container.addEventListener('click', () => {
                    selectThis(container, project);
                });

                let title = document.createElement('h2');
                title.textContent = project.title;
                container.appendChild(title);
                
                let viewBtn = document.createElement('button');
                viewBtn.classList.add('proj-view-btn');
                viewBtn.textContent = 'View project details';
                viewBtn.addEventListener('click', () => {
                    Object.assign(currentProj, project);
                    requestProjectView()
                });
                container.appendChild(viewBtn);
                
                parent.appendChild(container);
            }
        }

        function selectThis(selectedEle, selectedProj){
            
            if(selectedEle == lastConSelected){
                lastProjSelected = null;
                lastConSelected = null;
                selectedEle.style.backgroundColor = 'white';
                enableAddTask(false);
                console.log(`Unselected ${selectedEle}`)
            }
            else{ 
                let otherCons = [... document.querySelectorAll('.proj-con')].filter(con => con != selectedEle);
                otherCons.forEach(con => con.style.backgroundColor = 'white');
                lastProjSelected = selectedProj;
                lastConSelected = selectedEle;
                selectedEle.style.backgroundColor = 'red';
                enableAddTask(true);
                console.log(`Selected ${selectedEle}`)};
        }

        function enableAddTask(bool){
            if(bool == true){
                taskCon.style.display = 'block';
            }
            else{
                taskCon.style.display = 'none';
            }
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
