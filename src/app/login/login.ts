import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  display = true;
  val = 10;
  displayOneDiv = true;

  hideBox() {
    this.display = false;
  }

  showBox() {
    this.display = true;
  }

  toggleBox() {
    this.display = !this.display;
  }

  anotherFun() {
    this.displayOneDiv = !this.displayOneDiv;
  }
}
