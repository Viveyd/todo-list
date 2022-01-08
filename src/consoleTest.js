//Outdated
// export const consoleTest = function () {
// //Test creating two projects (project 1 and project 2)
// requestCreate(Project, 'sampleProj', 'for testing', 'today', 'tommorow', 'high', 'started') ;   
// requestCreate(Project, 'myProj', 'for testing', 'today', 'tommorow', 'high', 'started');   

// //Adding a new task to project 2 then viewing it
// requestCreate(Task, 'SampleTask', 'first task', 'today', 'max', 'high', Projects.list[1], 'started');
// viewInConsole(Projects.list[1].tasks[0]);
// //Testing update function on project 2's only task then viewing it
// requestUpdate(Projects.list[1].tasks[0], 'SampleTask', 'first task', 'today', 'tommorrow', 'high', 'started');
// viewInConsole(Projects.list[1].tasks[0]);

// // Testing delete function on project 1
// viewInConsole(Projects);
// requestDelete(Projects.list[0]);
// viewInConsole(Projects);

// //Observe before and after project update
// viewInConsole(Projects.list[0]);
// requestUpdate(Projects.list[0], 'myOnlyProject', 'This is a sample project for testing.', 'Today', 'Next month', 'Ultra', 'started');
// viewInConsole(Projects.list[0]);
// };