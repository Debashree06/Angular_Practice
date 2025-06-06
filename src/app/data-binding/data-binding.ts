import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dataBinding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  name = 'Debashree';
  // changeName(event: Event) {
  //   this.name = (event.target as HTMLInputElement).value;
  // }
}
