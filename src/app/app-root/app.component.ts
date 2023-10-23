import { Component } from '@angular/core';
import { MultiplicationTableComponent } from '../multiplicationtable/multiplicationtable.component'

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<app-multiplicationtable></app-multiplicationtable>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
}