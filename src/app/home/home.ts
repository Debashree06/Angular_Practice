import { routes } from './../app.routes';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  users = [
    { id: '1', name: 'Rosy', age: 25 },
    { id: '2', name: 'Raja', age: 12 },
    { id: '3', name: 'Rani', age: 5 },
    { id: '4', name: 'Dolly', age: 35 },
  ];

  //pass data by button click
  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['profile'], { queryParams: { name: 'Rossy' } });
  }
}
