// child.component.ts
import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl:'./child.component.html' ,
  styleUrls: ['./child.component.css']
    
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @Input() message: string | undefined;

  constructor() {
    console.log('Child Component - Constructor');
  }

  ngOnInit() {
    console.log('Child Component - ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Child Component - ngOnChanges', changes);
  }

  ngAfterViewInit() {
    console.log('Child Component - ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('Child Component - ngOnDestroy');
  }
}

