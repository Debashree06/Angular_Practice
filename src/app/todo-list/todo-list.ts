import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todoList',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  task = 'meeting at 10';
  taskList: { id: number; name: string }[] = [];

  addTask() {
    this.taskList.push({ id: this.taskList.length, name: this.task });
    // console.log('output task', this.taskList);
    this.task = '';
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter((item) => item.id != id);

    console.log('task deleted', id);
  }

  //dynamic color in Angular
  color = 'blue';
  fontSizeBig = '50px';
  fontSizeNormal = '20px';
  display = false;
  size = 30;

  zoomFontSize() {
    this.display = !this.display;
  }
}
