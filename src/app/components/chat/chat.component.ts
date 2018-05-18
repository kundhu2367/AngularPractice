import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  interpolatedString: string = 'This is the string that is getting displayed by interpolation';
  propertedBindedString: string = 'This is the string that is getting displayed by Property Binding';
  twoWayBinding: string = 'this is binded two way';
  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    alert('button was clicked!')
  }

}
