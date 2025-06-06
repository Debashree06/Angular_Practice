import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile';
import { CounterApp } from './counterApp/counterApp';
import { InputValue } from './input-value/input-value';
import { Signals } from './signals/signals';
import { EffectExample } from './effect-example/effect-example';
import { DataBinding } from './data-binding/data-binding';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected title = 'Debashree';
  // data: number | string = 30; //declare multiple type
  // userLogin: boolean = true;
  // info: number | string | boolean = "this is some data"
  // info: any = 'this is some data'; //any kind of data we can store
  // apple() {
  //   this.title = 'Rossy';
  //   this.data = 'Name';
  //   this.info = 30;
  //   this.info = 'Deba';
  //   this.info = [1, 2, 3];
  // }
  // sum(a: number, b: number) {
  //   console.log(a + b);
  // }
}
