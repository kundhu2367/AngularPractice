import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../interfaces/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users: Array<IUser>;

  user: any;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {

    // this.users = this.userService.getUsers();
    // this.userService.getUsersByRest().subscribe(
    //   users => this.users = users
    // );

    this.activatedRoute.params.subscribe((params) => {
      console.log(`params: ${params.userId}`);
      // this.user = this.userService.getUserById( +params.userId );
      this.userService.getUserByIdViaRest( +params.userId ).subscribe(
        user => this.user = user
      );
      // this.user = this.users.filter((user) => {
      //   return user.id === +params.userId;
      // })[0];
    });

    this.activatedRoute.queryParams.subscribe((qs) => console.log(qs));
  }

}
