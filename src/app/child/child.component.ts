import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() customEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  clickHandler() {
    console.log('Click handler in child called');
    console.log('Emitting the custom event');
    this.customEvent.emit({ on: new Date(), by: 'Button Click' });
  }
}
