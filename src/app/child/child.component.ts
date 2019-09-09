import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  DoCheck,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, DoCheck, AfterViewInit {
  @Output() customEvent = new EventEmitter();

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  clickHandler() {
    console.log('Click handler in child called');
    console.log('Emitting the custom event');
    this.customEvent.emit({ on: new Date(), by: 'Button Click' });
  }
}
