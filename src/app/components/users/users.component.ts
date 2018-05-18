import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<IUser>;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    // this.users = this.userService.getUsers();
    this.userService.getUsersByRest().subscribe(
      users => this.users = users
    );
    // this.activatedRoute.data.forEach( data => this.users = data.users );
  }

}
