import { Component, OnInit, Input, OnChanges } from '@angular/core';



@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit, OnChanges {

  @Input() filteredCards: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // detect filter changes
    console.log(this.filteredCards);
  }

}
