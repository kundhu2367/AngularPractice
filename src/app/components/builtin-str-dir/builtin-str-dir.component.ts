import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin-str-dir',
  templateUrl: './builtin-str-dir.component.html',
  styleUrls: ['./builtin-str-dir.component.css']
})
export class BuiltinStrDirComponent implements OnInit {

  messages: string[];
  showList: boolean;

  constructor() { }

  ngOnInit() {
    this.messages = [
      'Message 1',
      'Message 2',
      'Message 3',
      'Message 4',
      'Message 5'
    ];
    this.showList = true;
  }

}
