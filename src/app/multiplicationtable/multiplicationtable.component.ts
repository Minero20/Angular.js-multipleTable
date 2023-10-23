import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrls: ['./multiplicationtable.component.css']
})
export class MultiplicationTableComponent {
  selectedNumber = 1;
  multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  handleNumberChange(event: any) {
    this.selectedNumber = event.target.value;
  }
}
