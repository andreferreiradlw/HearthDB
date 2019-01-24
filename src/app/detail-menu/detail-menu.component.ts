import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit, OnChanges {
  // get card selected
  @Input() cardSelected: any;
  cardDisplay: any;
  // display closed
  @Output() detailsClosed = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // detect filter changes
    if ( changes['cardSelected'] && changes['cardSelected'].previousValue !== changes['cardSelected'].currentValue ) {
      // if changes @Input() cardSelected
      this.cardDisplay = changes['cardSelected'].currentValue;
    }
  }
  onCloseDetails() {
    this.detailsClosed.emit('closed');
  }
}
