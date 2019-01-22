import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';



@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit, OnChanges {
  // parent inputs
  @Input() filteredCards: any;
  @Input() menuState: any;
  // pagination strings
  page = 1;
  // 5 initial items per page
  itemsPerPage = 20;
  slicedCards: any;
  totalPages: number;
  filteredCardsLength: number;
  // sorting options
  orderOptions = ['Cost', 'Name', 'Class', 'Type'];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // detect filter changes
    if ( changes['filteredCards'] && changes['filteredCards'].previousValue !== changes['filteredCards'].currentValue ) {
      // if changes @Input() filteredCards
      this.totalPages = Math.ceil(changes['filteredCards'].currentValue / this.itemsPerPage);
      this.filteredCardsLength = changes['filteredCards'].currentValue.length;
      // slice cards with defaults
      this.onPageChange(1);
    }
  }
  // page change & slice array for pagination
  onPageChange(page: any) {
    // set page
    this.page = page;
    // start and end
    const start = this.itemsPerPage > -1 ? (page - 1) * Number(this.itemsPerPage) : 0;
    const end = this.itemsPerPage > -1 ? (start + Number(this.itemsPerPage)) : this.filteredCards.length;
    // slice cards
    this.slicedCards = this.filteredCards.slice(start, end);
    // set total pages
    this.totalPages = Math.ceil(this.filteredCards.length / this.itemsPerPage);
    console.log(this.slicedCards);
  }

  onItemsPerPageChange() {
    // this.itemsPerPage = numberPerPage.target.value;
    this.onPageChange(1);
    // this.onOrderChange()
  }

}
