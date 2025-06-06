import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  // data = signal<number | string>(10);

  // data: WritableSignal<number | string> = signal(10);
  // count: Signal<number> = computed(() => 20);

  data: WritableSignal<number> = signal(10);

  updateData() {
    // this.data.set('Debashree');

    this.data.update((val) => val + 10);
    //if we have one single data type than we perform update() method otherwise it showing error
  }
}
