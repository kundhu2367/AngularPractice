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
  posts: any;

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

  createUser() {
    this.user.id = null;
    this.userService.createUser(this.user).subscribe(
      user => alert(`A New user was created : ${user.id}`),
      err => alert(`got an error : ${err}`),
      () => alert(`creation of user completed!`)
    );
  }

  updateUser() {
    this.user.name = 'Sam Kolder';
    this.user.email = 'sam.kolder@example.com';
    this.userService.updateUser(this.user).subscribe(
      user => alert(`A user was updated : ${user.id}`),
      err => alert(`got an error : ${err}`),
      () => alert(`updateion of user completed!`)
    );
  }

  deleteUser() {
    this.userService.deleteUser(this.user.id).subscribe(
      user => alert(`A user was deleted : ${user.id}`),
      err => alert(`got an error : ${err}`),
      () => alert(`deletion of user completed!`)
    );
  }


  getUserPosts() {
    this.posts = this.userService.getUserPosts(this.user.id);
  }

}
