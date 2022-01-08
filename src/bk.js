import { pubSub } from "./sample1.js";
import { AppLogic } from "./core.js";
import'./index.css';
import appLogoURL from './homework.png';
import downIconURL from './down.png';
import ddIconURL from './expand.png';
import returnIconURL from './return.png';
import  "date-fns";
import { compareAsc, endOfToday, format, formatDistance, formatDistanceToNow, formatDistanceToNowStrict, isPast, isToday } from "date-fns";



const App = (function(){
    //Cache DOM
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    //Init variables
    let headerDD; 
    let projectList;  
    let projectView;  
    let creationForm; 

    let limitTaskDate;
    let setStatusOptions;

    let customizeProjectView;

    let selectedProject;
    let hiddenLi;

    let progBar;
    let pbarEdit;
    let pbarUpdate;

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    initLibrary();
    initHeaderDD();
    initProjectList(); 
    initViewProj(); 
    initCreateForm();
    initProgBar();

    function init(){
        initHeader();
        initMain();
        initFooter();
    }

    function initLibrary(){
        if(localStorage.user != null) AppLogic.Projects = getFromLocal();
        else createDemoLib();
    }

    function createDemoLib(){
        AppLogic.requestCreate('Project', 'Cemo Project 1', 'For application testing', '2021-11-21', '2021-11-24', 'high', 'Tracked') ;   
        AppLogic.requestCreate('Project', 'Demo Project 2', 'For application testing', '2021-11-21', '2021-11-25', 'normal', 'Untracked') ;
        AppLogic.requestCreate('Project', 'Bemo Project 3', 'For application testing', '2021-12-21', '2021-12-30', 'high', 'Tracked') ;   
        AppLogic.requestCreate('Project', 'Aemo Project 4', 'For application testing', '2021-12-21', '2021-12-22', 'normal', 'Untracked')    
        AppLogic.requestCreate('Task', 'Demo Task 1', 'For application testing', '2021-11-21', '2021-11-22', 'high', AppLogic.Projects.list[0], 'Finished');
        AppLogic.requestCreate('Task', 'Demo Task 2', 'For application testing', '2021-11-22', '2021-11-23', 'normal', AppLogic.Projects.list[0], 'Pending');
        AppLogic.requestCreate('Task', 'Demo Task 3', 'For application testing', '2021-11-22', '2021-11-23', 'normal', AppLogic.Projects.list[0], 'Pending');
    }

    function initHeader(){
        loadHeader(defaultHeader);
    }

        function loadHeader(headerStyle, customTitle){
            // Unload currently used header
            while(header.firstElementChild) header.removeChild(header.firstElementChild);
            // Load selected custom header
            if(headerStyle == customHeader1){ 
                headerStyle(customTitle)
                header.classList.add('grid-2-col')
            }
            else headerStyle();
        }

        function saveToLocal(){
            console.log(JSON.stringify(AppLogic.Projects.list));
            // localStorage.setItem('user', JSON.stringify(AppLogic.Projects));

        
        }

        function getFromLocal(){
            let localData = JSON.parse(localStorage.getItem('user'));
            return localData
        }

        function defaultHeader(){
            let logoCon = document.createElement('div');
            let title = document.createElement('h1');
            let navCon = document.createElement('div');

            logoCon.setAttribute('id', 'header-logo-con');
            title.setAttribute('id', 'header-title');
            navCon.setAttribute('id', 'header-nav-con');

            let logo = document.createElement('img');
            logo.src = appLogoURL;
            logoCon.appendChild(logo)
            
            title.textContent= 'Boogie Reminds';

            let dropdownBtn = document.createElement('a');
            dropdownBtn.setAttribute('id', 'header-dd-btn');
            dropdownBtn.setAttribute('data-state', 'hover-off')

            dropdownBtn.addEventListener('mouseenter', toggleDropdown)
            dropdownBtn.addEventListener('mouseleave', toggleDropdown);
            dropdownBtn.addEventListener('click', toggleDropdown);

            let dropDownIcon = document.createElement('img');
            dropDownIcon.setAttribute('id', 'header-dd-img');
            dropDownIcon.src = ddIconURL;
            dropdownBtn.appendChild(dropDownIcon);
            navCon.appendChild(dropdownBtn);

            header.appendChild(logoCon);
            header.appendChild(title);
            header.appendChild(navCon);
        }

        
        function customHeader1(customTitle){
            let returnCon = document.createElement('div');
            let title = document.createElement('h1');

            returnCon.setAttribute('id', 'header-return-con');
            title.setAttribute('id', 'header-project-title');

            let returnBtn = document.createElement('a');
            returnBtn.setAttribute('id', 'header-return-btn');
            

            returnBtn.addEventListener('click', returnToMain);

            let returnIcon = document.createElement('img');
            returnIcon.setAttribute('id', 'header-return-img');
            returnIcon.src = returnIconURL;
            returnBtn.appendChild(returnIcon);
            returnCon.appendChild(returnBtn); 

            title.textContent= (customTitle) ? customTitle: 'Default' ;
            
            header.appendChild(returnCon);
            header.appendChild(title);
        }


        function returnToMain(e){
            e.preventDefault();
            // console.log('Returning...')
            loadHeader(defaultHeader);
            loadMain(projectList);
            header.classList.remove('grid-2-col')
        }


        function toggleDropdown(e){
            e.preventDefault();
            let anchor = document.querySelector('#header-dd-btn');
            if(anchor){
                if(e.type == 'click' && anchor.getAttribute('data-state') != 'toggled-on'){
                    anchor.setAttribute('data-state', 'toggled-on');
                    anchor.appendChild(headerDD);
                }
                else if(e.type == 'click' && anchor.getAttribute('data-state') == 'toggled-on'){
                    anchor.setAttribute('data-state', 'hover-on');
                    if(anchor.contains(headerDD))anchor.removeChild(headerDD);
                }
                else if(e.type == 'mouseenter' && anchor.getAttribute('data-state') != 'toggled-on') {
                    anchor.appendChild(headerDD);
                    anchor.setAttribute('data-state', 'hover-on');
                }
                else if(e.type == 'mouseleave' && anchor.getAttribute('data-state') == 'hover-on'){
                    if(anchor.contains(headerDD))anchor.removeChild(headerDD);
                    anchor.setAttribute('data-state', 'hover-off');
                }
            }
            else return 0;
        }


        function initHeaderDD(){
            let dropDownCon = document.createElement('div');
            dropDownCon.setAttribute('id', 'header-dd-con');
            let dropDownUL = document.createElement('ul');
            dropDownUL.setAttribute('id', 'header-dd-ul');
            
            let newProjectLi = document.createElement('li');
            newProjectLi.classList.add('header-dd-li');
            let newProjectLink = document.createElement('a');
            newProjectLink.textContent = 'New Project';
            newProjectLink.href ='';
            newProjectLink.addEventListener('click', ()=> {
                loadHeader(customHeader1, 'New Project');
                loadMain(creationForm);
            });
            newProjectLi.appendChild(newProjectLink);

            let newTaskLi = document.createElement('li');
            newTaskLi.id = 'dd-new-task';
            newTaskLi.classList.add('header-dd-li');
            newTaskLi.classList.add('hidden');
            let newTaskLink = document.createElement('a');
            newTaskLink.textContent = 'New Task';
            newTaskLink.href ='';
            newTaskLink.addEventListener('click', ()=> {
                loadHeader(customHeader1, 'New Task');
                loadMain(creationForm);
                newTaskLi.classList.add('hidden');
                limitTaskDate(selectedProject.startDate, selectedProject.dueDate);
                setStatusOptions('Pending', 'Finished');
            });
            newTaskLi.appendChild(newTaskLink);
            dropDownUL.appendChild(newProjectLi);
            dropDownUL.appendChild(newTaskLi);
            dropDownCon.appendChild(dropDownUL);

            hiddenLi = newTaskLi;
            headerDD = dropDownCon;
        }

    function initMain(){
        loadMain(projectList);
    }           


        function reinit(element){
            switch(element){
                case headerDD:
                    initHeaderDD();
                    element = headerDD;
                    break;
                case creationForm:
                    initCreateForm();
                    element = creationForm;
                    break;
                case projectList:
                    initProjectList();
                    element = projectList;
                    break;    
                case projectView:
                    initViewProj();
                    element = projectView;
                    break;    
            }
            return element;
        }

        function loadMain(mainElement){
            unloadCurrentMain();
            //If element to append is empty because of unwrapping's removeChild func, we reinitialize it to get its initial value
            if(mainElement.children.length <= 1) mainElement = reinit(mainElement);
            main.appendChild(mainElement);
            unwrap(main.firstElementChild);
        }


        function unloadCurrentMain(){
            while(main.firstElementChild) main.removeChild(main.firstElementChild);
        }


        function unwrap(element){
            while(element.firstElementChild) element.parentNode.insertBefore(element.firstElementChild, element);
            element.parentNode.removeChild(element);
        }


        function initViewProj(){
            let con = document.createElement('div');


            let projHeaderCon = document.createElement('div');
            projHeaderCon.id = 'proj-header-con';
                let h2 = document.createElement('h2');
                h2.textContent = 'Viewing selected project.';

                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', () => {
                    deleteObj(selectedProject);
                    loadMain(projectList);
                    loadHeader(defaultHeader);
                    header.classList.remove('grid-2-col');                                                      
                })

                let editBtn = document.createElement('button');
                editBtn.textContent = 'Edit'
                editBtn.classList.add('proj-edit-btn');
                editBtn.addEventListener('click', () => {
                    // editBtn.textContent = (editBtn.textContent == 'Edit') ? 'Save': 'Edit';
                    let fields = [... document.querySelector('#view-project-details-con').querySelectorAll('p')];

                    if(editBtn.textContent == 'Edit'){
                        editBtn.textContent = 'Save';

                        let hinput = document.createElement('input');
                        hinput.classList.add('edit-proj-title');
                        hinput.value = header.lastElementChild.textContent;
                        header.lastElementChild.classList.add('hidden')
                        header.appendChild(hinput);                        
                        
                        for(let i = 0; i < fields.length; i++){
                            let field = fields[i];
                            field.style.display = 'none';
                            let con = field.parentElement;

                            if(i <= 2){
                                let input = document.createElement('input');
                                input.type = (i==0) ? 'text': 'date';
                                input.value= field.textContent;
                                
                                if(i == 1) con.insertBefore(input, con.firstElementChild.nextElementSibling);
                                else con.appendChild(input);
                        
                            }
                            else{
                                let selectEl = document.createElement('select');
                                let options = (i == 3) ? ['High Priority', 'Normal Priority', 'Low Priority']: ['Tracked', 'Untracked'];
                                options.forEach(option => {
                                    let optionEl = document.createElement('option');
                                    optionEl.value = option;
                                    optionEl.textContent = option;
                                    selectEl.appendChild(optionEl);
                                })
                                con.appendChild(selectEl);
                            }
                        }
                    }
                    else{
                        editBtn.textContent = 'Edit';

                        let con = document.querySelector('#view-project-details-con');
                        let inputs = con.querySelectorAll('input');
                        let selects = con.querySelectorAll('select');
                        let titleInput = header.lastElementChild;
                        let data = [titleInput.value, inputs[0].value, inputs[1].value, inputs[2].value, selects[0].value, selects[1].value];
                        let prop = ['title','description', 'startDate', 'dueDate', 'priority', 'status'];
                        // console.log(data);

                        

                        for(let i = 0; i <= 4; i++){
                            AppLogic.requestUpdateV2(selectedProject, prop[i], data[i]);
                            // +1 to accomodate the changes in the project's title without changing much code
                            fields[i].textContent = data[i+1];
                        }

                        header.lastElementChild.previousElementSibling.textContent = titleInput.value;
    
                        // AppLogic.viewInConsole(AppLogic.Projects.list[0]);
                        header.removeChild(header.lastElementChild);
                        header.lastElementChild.classList.remove('hidden');
                        inputs.forEach(input => input.parentElement.removeChild(input));
                        selects.forEach(select => select.parentElement.removeChild(select));
                        fields.forEach(field => field.style.display = 'block')
                        saveToLocal();
                    }
                })
            projHeaderCon.appendChild(h2);
            projHeaderCon.appendChild(editBtn);
            projHeaderCon.appendChild(deleteBtn);
            con.appendChild(projHeaderCon);

            let detailsCon = document.createElement('div');
            detailsCon.id = 'view-project-details-con';
                let descCon = document.createElement('div');
                let descLabel = document.createElement('label');
                descLabel.classList.add('view-proj-detail-label');
                descLabel.textContent = 'Description'
                let desc = document.createElement('p');
                desc.textContent = 'Project Description';
                descCon.appendChild(descLabel);
                descCon.appendChild(desc);

                let dateCon = document.createElement('div');
                let sdateLabel = document.createElement('label');
                sdateLabel.classList.add('view-proj-detail-label');
                sdateLabel.textContent = 'Project Start';
                let sdate = document.createElement('p');
                sdate.textContent = 'When project started?';
                let ddateLabel = document.createElement('label');
                ddateLabel.classList.add('view-proj-detail-label');
                ddateLabel.textContent = 'Project End'
                let ddate = document.createElement('p');
                ddate.textContent = 'When project ends?';
                dateCon.appendChild(sdateLabel);
                dateCon.appendChild(sdate);
                dateCon.appendChild(ddateLabel);
                dateCon.appendChild(ddate);

                let prioCon = document.createElement('div');
                let prioLabel = document.createElement('label');
                prioLabel.classList.add('view-proj-detail-label');
                prioLabel.textContent = 'Level of Priority'
                let prio = document.createElement('p');
                prio.textContent = 'Low/Normal/High';
                prioCon.appendChild(prioLabel);
                prioCon.appendChild(prio);

                let statCon = document.createElement('div');
                let statLabel = document.createElement('label');
                statLabel.classList.add('view-proj-detail-label');
                statLabel.textContent = 'Status'
                let stat = document.createElement('p');
                stat.textContent = 'Tracked/Untracked';
                statCon.appendChild(statLabel);
                statCon.appendChild(stat);
            detailsCon.appendChild(descCon);
            detailsCon.appendChild(dateCon);
            detailsCon.appendChild(prioCon);
            detailsCon.appendChild(statCon);

            let tasksCon = document.createElement('div');
            tasksCon.id = 'view-project-tasks-con';

                let taskHeadingCon = document.createElement('div');
                taskHeadingCon.classList.add('task-heading-con')

                    let taskHeading = document.createElement('h3');
                    taskHeading.textContent = 'Tasks';

                    let addTaskBtn = document.createElement('button');
                    addTaskBtn.textContent = '+';
                    addTaskBtn.addEventListener('click', ()=>{
                        loadMain(creationForm);
                        loadHeader(customHeader1, 'New Task');
                        // newTaskLi.classList.add('hidden');
                        limitTaskDate(sdate.textContent, ddate.textContent);
                        setStatusOptions('Pending', 'Finished');
                    })

                taskHeadingCon.appendChild(taskHeading);
                taskHeadingCon.appendChild(addTaskBtn);    
                    
                let tasksUl = document.createElement('ul');
                tasksUl.id='view-proj-tasksUL';
                // let tasksNone = document.createElement('p');
                // tasksNone.textContent = 'This project has no tasks yet...'
                // tasksUl.appendChild(tasksNone); 
                let sampleTaskObj = {
                    title: 'Sample Title',
                    description: 'Sample description',
                    startDate: 'YYYY-MM-DD',
                    dueDate: 'YYYY-MM-DD',
                    priority: 'Low/Normal/High',
                    status: 'Tracked',
                }

                tasksUl.appendChild(generateLI(sampleTaskObj));
                tasksUl.appendChild(generateLI(sampleTaskObj));
                tasksUl.appendChild(generateLI(sampleTaskObj));
            tasksCon.appendChild(taskHeadingCon);
            tasksCon.appendChild(tasksUl);

            con.appendChild(detailsCon);
            con.appendChild(tasksCon);
            projectView = con;

            //Used later to re-set load values of/project
            customizeProjectView = function(descArg, sdateArg, ddateArg, prioArg, statusArg, tasks){
                desc.textContent = descArg;
                sdate.textContent = sdateArg;
                ddate.textContent = ddateArg;
                prio.textContent = prioArg;
                stat.textContent = statusArg
                //ensures that ul is always empty before appending to it
                while(tasksUl.firstElementChild) tasksUl.removeChild(tasksUl.firstElementChild);
                tasks.forEach(task => {
                    tasksUl.appendChild(generateLI(task));
                });
            }
        }


        function generateLI(taskObj){
            let sampleTask = document.createElement('li');
                let previewCon = document.createElement('div');
                previewCon.classList.add('task-preview-con');
                if(taskObj.status == 'Finished') previewCon.classList.add('marked-task');
                    let taskTitle = document.createElement('p');
                    taskTitle.textContent = taskObj.title;
                    let taskActionsCon = document.createElement('div');
                    taskActionsCon.classList.add('task-actions-con');
                        let taskRaiseBtn = document.createElement('button');
                        let taskRaiseImg = document.createElement('img');
                        taskRaiseImg.classList.add('task-action-img', 'task-raise-img');
                        taskRaiseImg.src = downIconURL;
                        taskRaiseBtn.appendChild(taskRaiseImg);
                        taskRaiseBtn.addEventListener('click', ()=> raiseTask(sampleTask, taskObj));

                        let taskLowerBtn = document.createElement('button');
                        let taskLowerImg = document.createElement('img');
                        taskLowerImg.classList.add('task-action-img', 'task-lower-img');
                        taskLowerImg.src = downIconURL;
                        taskLowerBtn.appendChild(taskLowerImg);
                        taskLowerBtn.addEventListener('click', ()=> lowerTask(sampleTask, taskObj));

                        let taskExpandBtn = document.createElement('button');
                        let taskExpandImg = document.createElement('img');
                        taskExpandImg.classList.add('task-action-img', 'task-expand-img');
                        taskExpandImg.src = ddIconURL;
                        taskExpandBtn.appendChild(taskExpandImg);
                        taskExpandBtn.addEventListener('click', ()=> {
                            toggleExpand(sampleTask, taskObj)
                            taskExpandImg.classList.toggle('mirrored-vertically');
                        });
                    taskActionsCon.appendChild(taskRaiseBtn);
                    taskActionsCon.appendChild(taskLowerBtn);
                    taskActionsCon.appendChild(taskExpandBtn);
                previewCon.appendChild(taskTitle);
                previewCon.appendChild(taskActionsCon);
            sampleTask.appendChild(previewCon);
            return sampleTask;
        }


        function toggleExpand(con, taskObj){
            if(con.children.length ==1){
                expandTask(con, taskObj) ;
                // console.log('Expanded.')
            } else{
                if(con.querySelectorAll('input').length > 0) cancelTaskEdit(con, taskObj);
                con.removeChild(con.lastElementChild);
                // console.log('Collapsed.')
            }
        }

        function cancelTaskEdit(con, taskObj){
            //revert unsaved changes to taskObj's properties
            let paras = con.querySelectorAll('p');
            paras.forEach(para => para.style.display = 'block');
            paras[0].textContent = taskObj.title;
            paras[1].textContent = taskObj.description;
            paras[2].textContent = `${taskObj.startDate} to ${taskObj.dueDate}`;
            paras[3].textContent = taskObj.priority;
            paras[4].textContent = taskObj.status;

            let inputs = con.querySelectorAll('.edit-task-input-el');
            inputs.forEach(input => input.parentElement.removeChild(input));
        }


        function expandTask(taskEl, taskObj){
            let con = document.createElement('div');
            
            let details = ['Description', 'Date', 'Priority', 'Status'];
            for(let i = 0; i< details.length; i++){
                let detail = details[i];
                let detailCon = document.createElement('div')
                detailCon.classList.add('flex-column');
                let label = document.createElement('label');
                label.textContent = detail;
                let para = document.createElement('p');
                para.textContent = (detail != 'Date') ? taskObj[detail.toLowerCase()]: `${taskObj.startDate} to ${taskObj.dueDate}`;
                
                detailCon.appendChild(label);
                detailCon.appendChild(para);
                con.appendChild(detailCon);
            }
            let markTask = document.createElement('button');
            markTask.textContent = 'Mark as finished';
            markTask.addEventListener('click', markThisTask)
            con.appendChild(markTask);

            let editTask = document.createElement('button');
            editTask.textContent = 'Edit Task';
            editTask.addEventListener('click', (e) => updateTask(e, taskEl, taskObj));
            con.appendChild(editTask);

            let deleteTask = document.createElement('button');
            deleteTask.textContent = 'Delete Task';
            deleteTask.addEventListener('click', (e) => deleteTaska(e, taskEl, taskObj));
            con.appendChild(deleteTask);

            taskEl.appendChild(con);
        }

        function deleteTaska(e, taskEl, taskObj){
            taskEl.parentElement.removeChild(taskEl);
            deleteObj(taskObj);
            loadProgBar(selectedProject);
        }

        function deleteObj(taskObj){
            AppLogic.requestDelete(taskObj);
        }

        function updateTask(e, taskEl, taskObj){

            let editTask = e.target; 

            let inputFields = taskEl.querySelectorAll('p');

                if(editTask.textContent == 'Edit Task'){
            
                let input1 = document.createElement('input');
                input1.classList.add('task-title-input', 'edit-task-input-el');
                
                
                input1.type = 'text';
                input1.value = inputFields[0].textContent;
                inputFields[0].parentElement.insertBefore(input1, inputFields[0].parentElement.firstElementChild);

                let input2 = document.createElement('input');
                input2.classList.add('task-input-spacing', 'edit-task-input-el');
                input2.type = 'text';
                input2.value = inputFields[1].textContent;

                inputFields[1].parentElement.appendChild(input2);

                let if2Split = inputFields[2].textContent.split(' to ');

                let input3 = document.createElement('input');
                input3.classList.add('task-input-spacing', 'edit-task-input-el');
                input3.type = 'date';
                input3.value = if2Split[0];
                input3.min = selectedProject.startDate;
                input3.max = selectedProject.dueDate;
                inputFields[2].parentElement.appendChild(input3);

                let input4 = document.createElement('input');
                input4.classList.add('task-input-spacing', 'edit-task-input-el');
                input4.type = 'date';
                input4.value = if2Split[1];
                input4.min = selectedProject.startDate;
                input4.max = selectedProject.dueDate;
                inputFields[2].parentElement.appendChild(input4);

                let input5 = document.createElement('select');
                input5.classList.add('task-input-spacing', 'edit-task-input-el');
                let opt1 = ['High', 'Normal', 'Low'];
                opt1.forEach(optContent =>{
                    let option = document.createElement('option');
                    option.textContent = optContent;
                    if(optContent.toLowerCase() == inputFields[3].textContent.toLowerCase()) option.selected = 'true';
                    input5.appendChild(option);
                })
                inputFields[3].parentElement.appendChild(input5);

                let input6 = document.createElement('select');
                input6.classList.add('task-input-spacing', 'edit-task-input-el');
                let opt2 = ['Pending', 'Finished'];
                opt2.forEach(optContent =>{
                    let option = document.createElement('option');
                    option.textContent = optContent;
                    if(optContent.toLowerCase() == inputFields[4].textContent.toLowerCase()) option.selected = 'true';
                    input6.appendChild(option);
                })
                inputFields[4].parentElement.appendChild(input6);

                inputFields.forEach(field => field.style.display = 'none');
                editTask.textContent = 'Save';
                }
                else{
                    editTask.textContent = 'Edit Task';

                    let inputs = taskEl.querySelectorAll('input');
                    let selects = taskEl.querySelectorAll('select');
                    let data = [inputs[0], inputs[1], inputs[2], inputs[3], selects[0], selects[1]];
                    let prop = ['title', 'description', 'startDate', 'dueDate', 'priority', 'status'];

                    
                    inputFields[0].textContent = data[0].value;
                    inputFields[1].textContent = data[1].value;
                    inputFields[2].textContent = data[2].value + ' to ' + data[3].value;
                    inputFields[3].textContent = data[4].value;
                    inputFields[4].textContent = data[5].value;
                    
                    for(let i = 0; i < 6; i++){
                        AppLogic.requestUpdateV2(taskObj, prop[i], data[i].value);
                        data[i].parentElement.removeChild(data[i]);
                    }
                    
                    inputFields.forEach(field => field.style.display = 'block');
                }

        }


        function markThisTask(e){
            // loadProgBar(taskPreview.parentElement.parentElement.children.length);
            let selectedTask = e.target.parentElement.parentElement;
            let index = [... main.querySelector('#view-proj-tasksUL').children].indexOf(selectedTask);
            let newValue = (selectedProject.list[index].status == 'Finished') ? 'Pending': 'Finished';

            let taskPreview = this.parentElement.previousElementSibling;
            taskPreview.classList.toggle('marked-task');
            
            if(selectedTask.querySelectorAll('select').length == 2){
                let selectEl = selectedTask.querySelectorAll('select')[1];
                [... selectEl.children].forEach( opt => opt.selected = (opt.textContent == newValue) ? true : false);
            }
            else e.target.previousElementSibling.lastElementChild.textContent = newValue;
                
            AppLogic.requestUpdateV2(selectedProject.list[index], 'status', newValue);
            loadProgBar(selectedProject);

        }

        


        function loadProgBar(a){
            main.lastElementChild.insertBefore(progBar, main.lastElementChild.lastElementChild);
            pbarEdit();
            pbarUpdate(a);
        }


        function initProgBar(){
            let bar = document.createElement('div');
            bar.id = 'prog-bar';

            pbarEdit = function(){
                while(bar.firstElementChild) bar.removeChild(bar.firstElementChild);
                let points = bar.parentElement.lastElementChild.children.length;

                // console.log(bar);
                // let width = bar.clientWidth;
                let increment = 100/points;
                let currentX = 0;
                for(let i = 0; i <= points; i++){
                    let point = document.createElement('div');
                    point.classList.add('pbar-point');
                    if((i == points)) point.style.right =  0 + '%'
                    else if(i == 0) point.style.left = currentX + '%';
                    else point.style.left = currentX-5 + '%';
                    currentX += increment;
                    bar.appendChild(point);
                }
            }

            pbarUpdate = function(proj){
                let points = [... bar.children];
                let pointsToMark = proj.list.filter(task => task.status == 'Finished').length;
                // let pointsToMark = [... document.getElementById('view-proj-tasksUL').children].filter(task => task.firstElementChild.classList.contains('marked-task')).length;
                // console.log(pointsToMark);

                for(let i = 0; i <= pointsToMark; i++){
                    let point = points[i];
                    if(i <= pointsToMark) point.classList.add('marked-point');
                    else point.classList.remove('marked-point');
                }
            }
            progBar = bar;
        }


        function raiseTask(taskEl, taskObj){
            //Raise task element
            taskEl.parentElement.insertBefore(taskEl, taskEl.previousElementSibling);
            //Raise task object
            moveTaskObj('up', taskObj);
        }


        function lowerTask(taskEl, taskObj){
            //Lower task element
            if(taskEl.nextElementSibling)taskEl.parentElement.insertBefore(taskEl, taskEl.nextElementSibling.nextElementSibling);
            else taskEl.parentElement.insertBefore(taskEl, taskEl.parentElement.firstElementChild);
            //Lower task object
            moveTaskObj('down', taskObj);
            
        }
        // Moves the task's index up(+1) or down(-1) in the array. 
        
       
        function moveTaskObj(direction, taskObj){
            let containingArr = taskObj.parentObj.list;
            let index = containingArr.indexOf(taskObj);
            let destIndex;
            //If task is already first item in the array, moving up means becoming last item. 
            if(direction == 'up'){
                destIndex = (index-1<0) ? containingArr.length-1: index-1;
            }
             //If task is already last item in array, moving down means becoming first item.
            else if(direction == 'down'){
                destIndex = (index+1==containingArr.length) ? 0: index+1;  
            }
            let switcherooTarget = containingArr[destIndex];
            containingArr[destIndex] = taskObj;
            containingArr[index] = switcherooTarget;
        }
        

        function initProjectList(){
            let con = document.createElement('div');

            let h2 = document.createElement('h2');
            h2.textContent = 'Viewing all projects.';
            con.appendChild(h2);
            
            //search box elements
            let browserCon = document.createElement('div');
            let searchCon = document.createElement('div');
                let searchLabel = document.createElement('label');
                searchLabel.textContent = 'Search';
                let searchBox = document.createElement('input');
                searchBox.id = 'main-search-box';
                searchBox.type = 'text';
                searchBox.addEventListener('keyup', findMatches)
            searchCon.appendChild(searchLabel);
            searchCon.appendChild(searchBox);

            

            //sort elements
            let sortCon = document.createElement('div');
                let h3 = document.createElement('h3');
                h3.textContent = 'Sort:';
                sortCon.appendChild(h3);
                let sortOptions = ['Alphabetically', 'By date', 'By priority', 'By status'];
                for(let i = 0; i < sortOptions.length; i++){
                    let option = sortOptions[i];
                    let con = document.createElement('div');
                    let label = document.createElement('label');
                    label.textContent = option;
                    let radio = document.createElement('input');
                    radio.type = 'radio';
                    radio.name = 'sortRadios';
                    radio.classList.add('sortRadios');
                    radio.addEventListener('click', sortProjects)
                    con.appendChild(label);
                    con.appendChild(radio);
                    sortCon.appendChild(con);
                }
            browserCon.appendChild(searchCon);
            browserCon.appendChild(sortCon);
            con.appendChild(browserCon);

            //Filter elements
            let filterCon = document.createElement('div');
                let filterHeading = document.createElement('h3');
                filterHeading.textContent = 'Filter:';
                filterCon.appendChild(filterHeading);
                let filters = ['Due Date', 'Priority', 'Status'];
                for(let i = 0; i < filters.length; i++){
                    let filter = filters[i];
                    let button = document.createElement('button');
                    button.classList.add('filter-btns');
                    button.textContent = filter;
                    button.id = (filter == 'Due Date') ? 'filter-btn-due-date': `filter-btn-${filter.toLowerCase()}`;
                    button.addEventListener('click', filterList)
                    filterCon.appendChild(button);
                }
            con.appendChild(filterCon)

            // container + function to load existing projects inside
            let projectsWrapper = document.createElement('div');
            loadProjects(projectsWrapper);
            
            con.appendChild(projectsWrapper)
            
            projectList = con;
        }


        function sortProjects(e){
            let sorting = e.target.previousElementSibling.textContent.toLowerCase();
            // console.log(`Sorting projects`);
            let projCon = main.lastElementChild;
            let projects = [... projCon.children];
            let sortingFunc = (sorting == 'alphabetically') ? compareTitle:
                              (sorting == 'by date') ? compareDates:
                              (sorting == 'by priority') ? comparePriority: compareStatus;
            // let sorted = projects.sort((a,b) => (a.querySelector('h3').textContent < b.querySelector('h3').textContent) ? -1: 1);
            let sorted = projects.sort(sortingFunc);
            // console.log(sorted)
            sorted.forEach(sortee => projCon.appendChild(sortee))

        }


        function compareTitle(a, b){
            let ah3 = a.querySelector('h3').textContent;
            let bh3 = b.querySelector('h3').textContent;

            return (ah3 < bh3) ? -1: 1;
        }


        function compareDates(a, b){
            let ah3 = a.querySelector('.projlist-proj-date').textContent.split(' to ')[1].split(' ');
            let bh3 = b.querySelector('.projlist-proj-date').textContent.split(' to ')[1].split(' ');

            ah3[1] = ah3[1].split(',')[0]
            bh3[1] = bh3[1].split(',')[0]

            ah3 = `${ah3[2]}-${months.indexOf(ah3[0])}-${ah3[1]}`.split('-');
            bh3 = `${bh3[2]}-${months.indexOf(bh3[0])}-${bh3[1]}`.split('-');

            // console.log(ah3);
            // console.log(bh3);

            ah3.forEach(date => date = Number(date));
            bh3.forEach(date => date = Number(date));

            return (compareAsc(new Date(ah3[0], ah3[1], ah3[2]), new Date(bh3[0], bh3[1], bh3[2])) == -1) ? -1: 1;
        }


        function comparePriority(a, b){
            let ah3= a.querySelector('.projlist-proj-priority').textContent;
            let bh3= b.querySelector('.projlist-proj-priority').textContent;

            let ah3Val = (ah3 == 'High Priority') ? 3: 
                         (ah3 == 'Normal Priority') ? 2: 1;
            let bh3Val = (bh3 == 'High Priority') ? 3: 
                         (bh3 == 'Normal Priority') ? 2: 1;

            return (ah3Val < bh3Val) ? 1: 
                   (ah3Val > bh3Val) ? -1: 0;
        }


        function compareStatus(a, b){
            let ah3 = a.querySelector('.projlist-proj-status').textContent;
            let bh3 = b.querySelector('.projlist-proj-status').textContent;

            ah3 = (ah3 == 'Tracked') ? 1 : 0;
            bh3 = (bh3 == 'Tracked') ? 1 : 0;

            return (ah3 < bh3) ? 1:
                   (ah3 > bh3) ? -1: 0;
        }


        function filterList(e){
            let choices;
            if(this.id == 'filter-btn-due-date')choices = ['Due Date', 'Within 30 days', 'Within 14 days', 'Within 7 days', 'Today'];
            else if(this.id == 'filter-btn-priority') choices = ['Priority', 'Low Priority', 'Normal Priority', 'High Priority'];
            else choices = ['Status', 'Untracked', 'Tracked'];
            let choice = choices[choices.indexOf(this.textContent)];
            let newText = (choices.indexOf(choice)-1 < 0) ? choices[choices.length-1] : choices[choices.indexOf(choice)-1];
            this.textContent = newText;
            updateFilteredList();
        }
        
        function updateFilteredList(){
            
            let filterBtns = document.getElementsByClassName('filter-btns');
            let projects = [... main.lastElementChild.children];
            let activeFilters = [... filterBtns].filter( btn => ['Due Date', 'Priority', 'Status'].indexOf(btn.textContent) < 0);
            
            projects.forEach(project => {
                project.classList.add('hidden', 'filter-hidden');
                if(activeFilters.every( filter =>{
                    if(filter.id == 'filter-btn-due-date'){
                        let ddate = project.getElementsByClassName('projlist-proj-date')[0].textContent.split(' to ')[1];
                        let timeDistance = protoFunc(ddate, filter.textContent);
                        return filter.textContent.includes(timeDistance)
                    }
                    else return project.textContent.includes(filter.textContent)
                })) project.classList.remove('hidden', 'filter-hidden');
            })
        }

        function getTimeDistance(str){
            
            str = str.split(' ');
            str[1] = str[1].split(',')[0]

            str = `${str[2]}-${months.indexOf(str[0])}-${str[1]}`.split('-');

            let units = str.map(unit => unit = Number(unit));
            let distance = formatDistanceToNow(new Date(units[0], units[1], units[2]));
            if(distance.includes('hours')) {
                return 'Today';
            }
            else{
                let days = distance.split(' ')[0];
                return (days < 7) ? 'This week':
                (days < 14) ? 'Next week' : 'This month';
            }
        }
        // Receives the due date of each project and evaluates on which filters should they show
        function protoFunc(str, btnTxt){
            let dateUnit = str.split(' ');
            dateUnit[1] = dateUnit[1].split(',')[0];

            let formattedDate = `${dateUnit[2]}-${months.indexOf(dateUnit[0])}-${dateUnit[1]}`.split('-');
            formattedDate = new Date(formattedDate[0],formattedDate[1],formattedDate[2]);
            
            let distance = formatDistanceToNow(formattedDate);
            let days = distance.split(' ')[0];

            // if(isPast(formattedDate)) return 0;
            // else if(btnTxt == 'Today' && distance.includes('hours') && isToday(formattedDate)) return 'Today';
            // else if(btnTxt == 'Within 7 days' && days <= 7) return 'Within 7 days';
            // else if(btnTxt == 'Within 14 days' && days < 14) return 'Within 14 days'
            // else if(btnTxt == 'Within 30 days' && !distance.includes('month') && !isPast(formattedDate)) return 'Within 30 days'

            if(!isPast(formattedDate) && !distance.includes('month')){
                if(btnTxt == 'Today' && isToday(formattedDate)) return 'Today';
                else if(btnTxt == 'Within 7 days' && days <= 7) return 'Within 7 days';
                else if(btnTxt == 'Within 14 days' && days <= 14) return 'Within 14 days';
                else return 'Within 30 days';
            }
            else return 'No matches found';
        }

        //Basically, show only projects that contains text that the match text content of all active filters, which are filter buttons with text != default text content.
        // If filter being used to match is filter by 
        function findMatches(e){
            let projects = [... main.lastElementChild.children];
            projects.forEach(project => project.classList.add('hidden', 'search-hidden'));
            let searchQuery = this.value.toLowerCase().trim();
            if(searchQuery == ''){
                projects.forEach(project => project.classList.remove('hidden', 'search-hidden'));
                return 0;
            } 
            else{
                let matchedProjects = projects.filter(project => project.firstElementChild.textContent.toLowerCase().includes(searchQuery));
                matchedProjects.forEach(match => {
                    match.classList.remove('hidden', 'search-hidden');
                })
            }
        }


        // helper func to easily append new project preview elements to selected container
        function loadProjects(newCon){
            //Remove currently loaded projects
            while(newCon.firstElementChild) newCon.removeChild(newCon.firstElementChild);
            //Load projects stored in the Projects.list. Pass the project object in Projects.list to be used as basis for project preview
            let projects = [... AppLogic.Projects.list];
            for(let i = 0; i < projects.length; i++){
                let project = projects[i];
                newCon.appendChild(generateProjectPreview(project));
                // newCon.appendChild(generateProjectPreview(project.title, project.startDate, project.dueDate, project.status));
            }
        }


        // used to create new project preview elements
        function generateProjectPreview(project){
            let con = document.createElement('div');
            con.classList.add('projlist-project-con');
            con.setAttribute('data-selected', 'false');
            con.addEventListener('click', () => selectProject(con, project));

            let projDetailCon = document.createElement('div');
            let leftDetail = document.createElement('div');
                let title = document.createElement('h3');
                title.textContent = (project) ? project.title:'Project Title';
            leftDetail.appendChild(title);
            let rightDetail = document.createElement('div');
                let date = document.createElement('p');
                date.classList.add('projlist-proj-date');
                if(project){
                    let sdate = project.startDate.split('-');
                    let ddate = project.dueDate.split('-');

                    sdate = format(new Date(sdate[0], sdate[1]-1, sdate[2]), 'PP');
                    ddate = format(new Date(ddate[0], ddate[1]-1, ddate[2]), 'PP')
    
                    date.textContent = `${sdate} to ${ddate}`;
                } 
                else{
                    date.textContent = `YYYY-MM-DD to YYYY-MM-DD`;
                }
                let prio = document.createElement('p');
                prio.classList.add('projlist-proj-priority');
                prio.textContent = `${(project) ? `${capitalizeStr(project.priority)} Priority`: `Level of Priority`}`;
                let status = document.createElement('p');
                status.classList.add('projlist-proj-status');
                status.textContent = (project) ? project.status: 'Tracked/Untracked';
            rightDetail.appendChild(date);
            rightDetail.appendChild(prio);
            rightDetail.appendChild(status);
            projDetailCon.appendChild(leftDetail)
            projDetailCon.appendChild(rightDetail)
            let projViewBtn = document.createElement('button');
            projViewBtn.textContent = 'View project';
            // if view button of project preview is clicked, header changes with project.title as title, projectView is loaded and then sets its elements text content according to values from project object
            projViewBtn.addEventListener('click', ()=> {
                hiddenLi.classList.add('hidden');
                loadHeader(customHeader1, title.textContent);
                loadMain(projectView)
                if(project)customizeProjectView(project.description, project.startDate, project.dueDate, project.priority, project.status, project.list);
                loadProgBar(project);
                
            });

            con.appendChild(projDetailCon);
            con.appendChild(projViewBtn);
            return con;
        }


        function capitalizeStr(str){
            str = [... str];
            str[0] = str[0].toUpperCase();
            return str.join('');
        }


        // event handler when user clicks on a project preview/card. highlights the project,  unselects others, then sets it as the value of selected project
        function  selectProject(projectEl, projectObj){
            let otherProjects = [... projectEl.parentElement.children].filter(currentProj => currentProj != projectEl);
            // if is not yet selected, select clicked container, unselect sibligns, assign project as value of selected project
            if(projectEl.getAttribute('data-selected') == 'false'){
                projectEl.setAttribute('data-selected', 'true');
                selectedProject = projectObj;
                projectEl.classList.add('selected-proj')
                hiddenLi.classList.remove('hidden'); 
                otherProjects.forEach(otherProj => {
                    otherProj.setAttribute('data-selected', 'false');
                    otherProj.classList.remove('selected-proj');
                });
            }
            //if already selected, then unselect
            else{
                selectedProject = null;
                projectEl.setAttribute('data-selected', 'false');
                projectEl.classList.remove('selected-proj')
                hiddenLi.classList.add('hidden');
            }
        }


        function initCreateForm(){
            let con = document.createElement('div');

            let h2 = document.createElement('h2');
            h2.textContent = 'Creating new project/task.';
            con.appendChild(h2);

            let form = document.createElement('form');

            let formFieldsCon = document.createElement('div');
            formFieldsCon.id = 'create-formfields-con';
            let leftFieldsCon = document.createElement('div');
            leftFieldsCon.id = 'create-formfields-left';
                let titleCon = document.createElement('div');
                    let titleLabel = document.createElement('label');
                    titleLabel.classList.add('create-labels');
                    titleLabel.textContent = 'Title'
                    titleLabel.for = 'create-title-input';
                    let titleInput = document.createElement('input');
                    titleInput.id = 'create-title-input';
                    titleInput.classList.add('create-form-input')
                titleCon.appendChild(titleLabel);
                titleCon.appendChild(titleInput);

                let descCon = document.createElement('div');
                    let descLabel = document.createElement('label');
                    descLabel.classList.add('create-labels');
                    descLabel.textContent = 'Description'
                    descLabel.for = 'create-desc-input';
                    let descInput = document.createElement('textarea');
                    descInput.id = 'create-desc-input';
                    descInput.classList.add('create-form-input')
                descCon.appendChild(descLabel);
                descCon.appendChild(descInput);
            leftFieldsCon.appendChild(titleCon);
            leftFieldsCon.appendChild(descCon);


            let rightFieldsCon = document.createElement('div');
            rightFieldsCon.id = 'create-formfields-right';
                let dateCon = document.createElement('div');
                dateCon.id='create-date';
                    let leftDiv = document.createElement('div');
                    leftDiv.id = 'create-date-left';
                    let sDateLabel = document.createElement('label');
                    sDateLabel.classList.add('create-labels');
                    sDateLabel.textContent = 'Start Date'
                    sDateLabel.for = 'create-sdate-input';
                    let sDateInput = document.createElement('input');
                    // sDateInput.min = '2021-10-18'
                    sDateInput.type = 'date';
                    sDateInput.id = 'create-sdate-input';
                    leftDiv.appendChild(sDateLabel);
                    leftDiv.appendChild(sDateInput);
                    limitTaskDate = function(minDate,maxDate){
                        sDateInput.min = minDate;
                        dDateInput.min = minDate;
                        sDateInput.max = maxDate;
                        dDateInput.max = maxDate;
                    }

                    let rightDiv = document.createElement('div');
                    rightDiv.id = 'create-date-right';
                    let dDateLabel = document.createElement('label');
                    dDateLabel.classList.add('create-labels');
                    dDateLabel.textContent = 'Due Date'
                    dDateLabel.for = 'create-ddate-input';
                    let dDateInput = document.createElement('input');
                    dDateInput.type = 'date';
                    dDateInput.id = 'create-ddate-input';
                    rightDiv.appendChild(dDateLabel);
                    rightDiv.appendChild(dDateInput);
                dateCon.appendChild(leftDiv);
                dateCon.appendChild(rightDiv);

                let prioCon = document.createElement('div');
                prioCon.id = 'create-prio-con';
                    let prioLabel = document.createElement('label');
                    prioLabel.classList.add('create-labels');
                    prioLabel.textContent = 'Priority'
                    prioLabel.for = 'create-prio-input';
                    let prioInput = document.createElement('select');
                    prioInput.id = 'create-prio-input';
                    prioInput.classList.add('create-form-input')
                        let prioChoices = ['Low','Normal','High'];
                        prioChoices.forEach(choice => {
                            let option = document.createElement('option');
                            option.textContent = choice;
                            if(choice == 'Normal') option.selected = true;
                            prioInput.appendChild(option);
                        })
                prioCon.appendChild(prioLabel);
                prioCon.appendChild(prioInput);

                let statusCon = document.createElement('div');
                statusCon.id = 'create-status-con';
                    let statusLabel = document.createElement('label');
                    statusLabel.classList.add('create-labels');
                    statusLabel.textContent = 'Status'
                    statusLabel.for = 'create-status-input';
                    let statusInput = document.createElement('select');
                    statusInput.id = 'create-status-input';
                    statusInput.classList.add('create-form-input')
                        let statusChoices = ['Tracked','Untracked'];
                        statusChoices.forEach(choice => {
                            let option = document.createElement('option');
                            option.textContent = choice;
                            if(choice == 'Tracked') option.selected = true;
                            statusInput.appendChild(option);
                        })
                setStatusOptions = function(){
                    [... statusInput.children].forEach(opt => statusInput.removeChild(opt));
                    [... arguments].forEach(option =>{
                        let optionEl = document.createElement('option');
                        optionEl.textContent = option;
                        if(option == 'Pending') optionEl.selected = true;
                        statusInput.appendChild(optionEl);
                    })

                }
                statusCon.appendChild(statusLabel);
                statusCon.appendChild(statusInput);

            rightFieldsCon.appendChild(dateCon);
            rightFieldsCon.appendChild(prioCon);
            rightFieldsCon.appendChild(statusCon);

            formFieldsCon.appendChild(leftFieldsCon);
            formFieldsCon.appendChild(rightFieldsCon);

            let submitBtn = document.createElement('button');
            submitBtn.textContent = 'Create';
            //creates an object(Project/Task) based on user input as values and the header title to indicate what object is to be created
            submitBtn.addEventListener('click', (e)=>{
                e.preventDefault();
                let headerTitle = document.querySelector('#header-project-title').textContent;
                if([titleInput.value, descInput.value, sDateInput.value, dDateInput.value, prioInput.value, statusInput.value].some(value => !value)) alert('Invalid Input');
                else if(headerTitle == 'New Project') AppLogic.requestCreate('Project', titleInput.value, descInput.value, sDateInput.value, dDateInput.value, prioInput.value, statusInput.value);
                else if (headerTitle == 'New Task') AppLogic.requestCreate('Task', titleInput.value, descInput.value, sDateInput.value, dDateInput.value, prioInput.value, selectedProject, statusInput.value);
                //After the new project/task object is added, reload what is being shown on project list
                loadHeader(defaultHeader);
                loadMain(projectList);
            })
            
            // form.appendChild(titleCon);
            // form.appendChild(descCon);
            // form.appendChild(dateCon);
            // form.appendChild(prioCon);
            form.appendChild(formFieldsCon);
            form.appendChild(submitBtn);

            con.appendChild(form);
            creationForm = con;
        }


    function initFooter(){
        
    }

    return{
        init,
    }
})();

App.init();