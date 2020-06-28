import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sb-ngb-dropdown';
  items = [
    { id: 1, displayText: 'option 1', selected: true },
    { id: 2, displayText: 'option 2', selected: false },
    { id: 3, displayText: 'option 3', selected: false },
  ];
  selectedItem: any;

  dropdown(event) {
    this.selectedItem = event;
  }
}
