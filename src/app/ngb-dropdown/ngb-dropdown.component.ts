import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb-dropdown',
  templateUrl: './ngb-dropdown.component.html',
  styleUrls: ['./ngb-dropdown.component.scss'],
})
export class NgbDropdownComponent implements OnInit {

  @Input() items: any;
  @Output() selectedItem = new EventEmitter<any>();

  

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
    this.selectedItem.emit(item);
  }
}
