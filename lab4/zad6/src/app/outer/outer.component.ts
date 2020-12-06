import { InnerComponent } from './inner/inner.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css'],
})
export class OuterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild(InnerComponent) child: InnerComponent;

  countChangedHandler(count: number) {
    console.log(count);
    if (count == 10) {
      this.child.isBlocked = true;
      console.log('blocked');
    }
  }
}
