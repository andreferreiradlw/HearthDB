import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChange } from '@angular/core';

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
  // on init
  ngOnInit() { }
  // on changes to @Input
  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // detect filter changes
    if ( changes['cardSelected'] && changes['cardSelected'].previousValue !== changes['cardSelected'].currentValue ) {
      // if changes @Input() cardSelected
      this.cardDisplay = '';
      this.cardDisplay = changes['cardSelected'].currentValue;
    }
  }
  onCloseDetails() {
    this.detailsClosed.emit('closed');
  }
  setClassStyles(eventclass: any) {
    const classHex = function () {
      if (eventclass === 'PALADIN') {
        return '#D2A047';
      } else if (eventclass === 'DRUID') {
        return '#8F7058';
      } else if (eventclass === 'HUNTER') {
        return '#246021';
      } else if (eventclass === 'MAGE') {
        return '#7387B5';
      } else if (eventclass === 'PRIEST') {
        return '#DBDDDC';
      } else if (eventclass === 'ROGUE') {
        return '#494A4D';
      } else if (eventclass === 'SHAMAN') {
        return '#353E6B';
      } else if (eventclass === 'WARLOCK') {
        return '#4F3455';
      } else if (eventclass === 'WARRIOR') {
        return '#3D3D41';
      } else if (eventclass === 'NEUTRAL') {
        return '#74675D';
      }
    }
    const styles = {
      'background-color': classHex(),
      'color': (eventclass === 'PRIEST') || (eventclass === 'PALADIN') ? 'black' : 'white'
    };
    return styles;
  }
}
