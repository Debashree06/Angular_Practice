import { Component } from '@angular/core';

@Component({
  selector: 'app-inputValue',
  imports: [],
  templateUrl: './input-value.html',
  // styleUrl: './input-value.css',
  styles: [
    'h1{background-color: green ;color: white; padding: 10px; border-radius: 10px}',
  ],
})
export class InputValue {
  username = '';

  getUserName(event: Event) {
    // const name = (event.target as HTMLInputElement).value;
    // console.log(name);
    // this.username = name;
    //this.username = (event.target as HTMLInputElement).value;
  }

  setUserName() {
    this.username = 'Peter';
  }

  getUserNameWithTemplate(value: string) {
    this.username = value;
    console.log(value);
  }
}
