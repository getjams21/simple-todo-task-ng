import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks = [
    {
      title: "Task 1",
      description: "To do create module"
    },
    {
      title: "Task 2",
      description: "To do read module"
    },
    {
      title: "Task 3",
      description: "To do update module"
    }
  ];
  // Model to push to tasks array;
  task: any={};

  // To edit index key
  key;

  // Identifier if modal is for edit
  isEdit = false;

  // To Add new task
  addTask(){
    this.task.title = '';
    this.task.description = '';
    this.isEdit = false;
  }
  // Store new task
  storeTask(){
    this.tasks.push(this.task);
    this.task = {};
  }

  // Delete selected task
  deleteTask(index){
    this.tasks.splice(index,1);
  }

  // To edit task
  editTask(index){
    this.task.title = this.tasks[index].title;
    this.task.description = this.tasks[index].description;
    this.key = index;
    this.isEdit = true;
  }

  // Update task
  updateTask(index){
    this.tasks[index] = this.task;
    this.task = {};
  }
}
