import { pubSub } from "./sample1.js";

export const AppLogic = (function(){
    // Initialize core object factory functions
    function listProjects(){
    }
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
            this.update2 = function (targetProp, newVal){
                this[targetProp] = newVal;
            }
            //Pre-set properties
            // this.ctor = Project
            this.tasks = [];
            // this.list = this.tasks;
            // this.parentObj = Projects;
            
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
        update2: function(targetProp, newVal) {
            this[targetProp] = newVal;
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
        init: function(title, desc, startDate, dueDate, prio, projectIndex, status) {
            this.title = title;
            this.description =desc;
            this.startDate = startDate;
            this.dueDate = dueDate;
            this.priority = prio;
            this.projectIndex = projectIndex;
            this.status = status;
            this.update2 = function (targetProp, newVal){
                this[targetProp] = newVal;
            }
            //Pre-set properties
            // this.ctor = Task;
            // this.parentObj = this.project;
            
            pubSub.publish('taskAdded', this, projectIndex);
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
        update2: function(targetProp, newVal) {
            this[targetProp] = newVal;
          },
        consoleView: function(){
            console.log(`Project: ${Projects.list[this.projectIndex].title}`);
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
        // console.log(`You've created a new ${constuctor}: ${argsArr[0]}.`)
        // console.log(`You've created a new ${constructor.type}: ${newObj.title}.`)
        
    })
    pubSub.subscribe('updateThat', ([target, updatedValues]) => {
        target.update.apply(target, updatedValues)
    })
    pubSub.subscribe('updateThatV2', ([targetObj, targetProp, newVal]) => {
        targetObj.update2.call(targetObj, targetProp, newVal)
      })
    pubSub.subscribe('deleteThat', ([target])=>{
        let parentObj1 = (target.hasOwnProperty('projectIndex')) ? Projects.list[target.projectIndex]: Projects;
        let objStorage = parentObj1.list;
        objStorage.splice(objStorage.indexOf(target), 1);
        // console.log(`You've deleted the ${target.ctor.type}: ${target.title}.`)
    })
    pubSub.subscribe('projectAdded', ([project])=>{
        Projects.list.push(project);
    })
    pubSub.subscribe('taskAdded', ([task, projectIndex])=>{
        Projects.list[projectIndex].tasks.push(task);
    })

    // Interface of DOM to object logic
    function requestCreate(ctor, objArgs){
        
        ctor = (ctor == 'Project') ? Project: Task;
        pubSub.publish('createThat', ctor , [... arguments].slice(1));
    }
    function requestDelete(target){
        pubSub.publish('deleteThat', target)
    }
    function requestUpdate(target, updatedValues){
        pubSub.publish('updateThat', target, [... arguments].slice(1))
    }
    function requestUpdateV2(targetObj, targetProp, newVal) {
        pubSub.publish('updateThatV2', targetObj, targetProp, newVal);
      }

    // Used for tests on console trying out functionality
    function viewInConsole(object){ 
        console.log('*****************')
        object.consoleView();
    }




    return {
       Projects ,Project, Task, listProjects, requestCreate, requestDelete, requestUpdate, requestUpdateV2, viewInConsole
    }
})();

