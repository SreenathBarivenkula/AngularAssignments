import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl:'./parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message: string = 'Initial message from parent';

  changeMessage() {
    this.message = 'New message from parent';
  }
  changeMessage1() {
    this.message = 'Alert 2 from parent ';
  }
  changeMessage2() {
    this.message = 'Alert 3 from parent ';
  }
  constructor() {
    console.log('Parent Component - Constructor');
  }

  ngOnInit() {
    console.log('Parent Component - ngOnInit');
  }

  ngOnChanges() {
    console.log('Parent Component - ngOnChanges');
  }

  ngAfterViewInit() {
    console.log('Parent Component - ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('Parent Component - ngOnDestroy');
  }
}

