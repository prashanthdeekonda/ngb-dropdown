import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb-dropdown',
  templateUrl: './ngb-dropdown.component.html',
  styleUrls: ['./ngb-dropdown.component.scss'],
})
export class NgbDropdownComponent implements OnInit {
  items = [
    { id: 1, displayText: 'option 1', selected: true },
    { id: 2, displayText: 'option 2', selected: false },
    { id: 3, displayText: 'option 3', selected: false },
  ];

  @ViewChild(NgbDropdown, { static: false }) private dropdown: NgbDropdown;
  constructor() {}

  ngOnInit() {}

  closeModal() {
    if (this.dropdown) {
      this.dropdown.close();
    }
  }

  changeSelectedItem(item) {
    this.items.forEach((option) => (option.selected = false));
    item.selected = true;
  }
}
