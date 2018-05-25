import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit, OnDestroy {

  prop: string;
  subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.propChanged.subscribe(
      prop => this.prop = prop,
      () => alert('Observable is complete!')
    );
    // this.prop = this.userService.getProp();
  }

  changeProp() {
    this.userService.setProp('bar');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
