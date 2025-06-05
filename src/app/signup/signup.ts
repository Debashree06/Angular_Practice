import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  color = 'gold';

  handleColor(val: string) {
    this.color = val;
  }

  changeColor(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }
}
