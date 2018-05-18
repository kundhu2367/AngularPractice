import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  user: { name: string } = { name: 'Jhon' };

  @ViewChild(ChildComponent) child: ChildComponent;

  counter: number;

  constructor() { }

  ngOnInit() {
  }

  onCounterChange($event) {
    this.counter = $event;
  }

  changeProperty() {
    this.user.name = 'Sam';
  }

  changeObj() {
    this.user = { name: 'Tom' };
  }
}
