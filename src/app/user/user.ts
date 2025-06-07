import { ActivatedRoute } from '@angular/router';
import { routes } from './../app.routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  name: string | null = '';
  id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);

      this.name = params['name'];
      this.id = params['id'];
    });
  }
}
