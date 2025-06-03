import { Component } from '@angular/core';

@Component({
  selector: 'app-counterApp',
  templateUrl: './counterApp.html',
  styleUrl: './counterApp.css',
})
export class CounterApp {
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
