import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren,
  QueryList, ContentChild, AfterContentInit, ContentChildren } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { CanComponentDeactivate } from '../../gaurds/confirmation/confirmation.guard';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, CanComponentDeactivate {

  // @ViewChild(MessageComponent) firstMessageComponent: MessageComponent;
  // @ViewChildren(MessageComponent) allMessageComponents: QueryList<MessageComponent>;

  // @ContentChild(MessageComponent) firstProjectedMessageComponent: MessageComponent;
  // @ContentChild('tempMessage') tempMessageComponent: MessageComponent;
  // @ContentChildren(MessageComponent) allProjectedMessageComponents: QueryList<MessageComponent>;


  messageList: Array<{ message: string }> = [];
  // msg: string = '';
  msg = '';

  // messages: string[] = [
  //   'Message 1',
  //   'Message 2',
  //   'Message 3',
  //   'Message 4'
  // ];

  addMessage() {
    this.messageList.push({ message: this.msg });
    this.msg = '';
  }

  onMsgDelete( $event ) {
    this.messageList.splice($event, 1);
  }

  changeFirstMsg () {
    this.messageList[0].message = 'new and changed msg!';
  }

  confirm() {
    return confirm('Are you sure you want to navigate away..??');
  }

  constructor() {

  }

  ngOnInit() {
  }

  // ngAfterViewInit() {
  //   this.allMessageComponents.toArray().forEach(message => {
  //     message.message = 'dummy';
  //   });
  //   // this.firstMessageComponent.message = 'Dumm2';
  // }

  // ngAfterContentInit() {
  //   this.allProjectedMessageComponents.toArray().forEach(message => {
  //     message.message = 'dummyContent';
  //   });
  //   this.tempMessageComponent.message = 'Dumm2Content';
  // }
}
