import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class ProfileComponent {
  userName: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //pass data by Router link
    // let user = this.route.snapshot.paramMap.get('name');
    // console.log(user);
    // this.userName = user;

    //pass data by button click
    // this.route.queryParams.subscribe((params) => {
    // console.log(params);
    //   this.userName = params['name'];
    // });

    //pass data by router
    this.route.data.subscribe((params) => {
      console.log(params);
      this.userName = params['name'];
    });
  }
}
