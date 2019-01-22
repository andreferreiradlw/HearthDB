import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';



@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit, OnChanges {

  @Input() filteredCards: any;
  @Input() menuState: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // detect filter changes
    if( changes['filteredCards'] && changes['filteredCards'].previousValue != changes['filteredCards'].currentValue ) {
      console.log(this.filteredCards);
    }
  }

}
