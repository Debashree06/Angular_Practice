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

  users = ['Anil', 'Arun', 'Tarun'];

  students = [
    {
      name: 'Aisha Sharma',
      age: 20,
      email: 'aisha.sharma@example.com',
    },
    {
      name: 'Rohan Singh',
      age: 22,
      email: 'rohan.singh@example.com',
    },
    {
      name: 'Priya Patel',
      age: 19,
      email: 'priya.patel@example.com',
    },
    {
      name: 'Amit Kumar',
      age: 21,
      email: 'amit.kumar@example.com',
    },
    {
      name: 'Sneha Gupta',
      age: 23,
      email: 'sneha.gupta@example.com',
    },
    {
      name: 'Vikram Reddy',
      age: 20,
      email: 'vikram.reddy@example.com',
    },
  ];

  getName(name: string) {
    console.log(name);
  }
}
