import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, SimpleChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

  @Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
  })

export class MessageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() message: string;
  @Input() index: number;
  @Output() messageDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log(`Message Costructor :`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`Message onchange :`);
    for( let prop in changes) {
      console.log(changes);
      console.log(prop);
      console.log(`Property name : ${prop}, current value : ${changes[prop].currentValue}, : previous value : ${changes[prop].previousValue}`);
    }
  }

  ngOnInit() {
    console.log(`Message oninit :`);
  }

  ngDoCheck() {
    console.log(`Message docheck : `);
  }

  ngAfterContentInit() {
    console.log(`Message aftercontent init :`);
  }

  ngAfterContentChecked() {
    console.log(`Message aftercontent checked :`);
  }

  ngAfterViewInit() {
    console.log(`Message after view init :`);
  }

  ngAfterViewChecked() {
    console.log(`Message after view checked :`);
  }

  ngOnDestroy() {
    console.log(`Message ondestroy :`);
  }

  delete( ) {
    this.messageDelete.emit(this.index);
  }
}
