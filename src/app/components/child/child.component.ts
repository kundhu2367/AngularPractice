import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() user: { name: string };

  count: number = 0;

  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  onInc() {
    this.counterChange.emit(++this.count);
  }

  onDec() {
    this.counterChange.emit(--this.count);
  }
}
