import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effectExample',
  imports: [],
  templateUrl: './effect-example.html',
  styleUrl: './effect-example.css',
})
export class EffectExample {
  userName = signal('Deba');
  count = signal(0);
  displayHeading = false;

  // constructor() {
  //   effect(() => {
  //     console.log(this.userName);
  //   });
  // }

  //use timeout with effect
  // constructor() {
  //   effect(() => {
  //     if (this.count() == 2) {
  //       this.displayHeading = true;
  //       setTimeout(() => {
  //         this.displayHeading = false;
  //       }, 2000);
  //     } else {
  //       this.displayHeading = false;
  //     }
  //   });
  // }

  users = [
    'Sandhya',
    'Santosh',
    'Abhishek',
    'Smith',
    'Jones',
    'Josef',
    'Lowes',
    'Peter',
    'Sam',
  ];

  //if user are have not any element than empty condition
  // users = [];
}
