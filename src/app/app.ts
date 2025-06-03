import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile';

@Component({
  selector: 'app-root',
  // imports: [Login, Signup, ProfileComponent],
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

  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count = this.count - 1;
  }

  reset() {
    this.count = 0;
  }

  // instead of above three function we used only one function with single parameter

  handleCounter(val: string) {
    if (val == 'minus') {
      if (this.count > 0) {
        this.count--;
      }
    } else if (val == 'plus') {
      this.count++;
    } else {
      this.count = 0;
    }
  }
}
