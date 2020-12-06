import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css'],
})
export class InnerComponent {
  constructor() {}

  count: number = 0;
  isBlocked: boolean = false;

  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  increment() {
    if (!this.isBlocked) {
      this.count++;
      this.countChanged.emit(this.count);
    }
  }
  reset() {
    this.isBlocked = false;
    this.count = 0;
    this.countChanged.emit(this.count);
  }
}
