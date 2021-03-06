import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { OrderByPipePipe } from '../orderByPipe.pipe';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
  providers: [ OrderByPipePipe ]
})
export class CardViewComponent implements OnInit, OnChanges {
  // parent inputs
  @Input() filteredCards: any;
  @Input() menuState: any;
  @Input() detailState: any;
  // output event emitter when card clicked
  @Output() cardSelected = new EventEmitter();
  @Output() changeDetailState = new EventEmitter();
  @Output() changeView = new EventEmitter();
  @Output() changeFormat = new EventEmitter();
  @Output() openFilterMenu = new EventEmitter();
  // default pagination strings
  page = 1;
  itemsPerPage = 18;
  totalPages: number;
  // cards strings
  slicedCards: any;
  filteredCardsLength: number;
  previousCard: any;
  // sorting options
  orderOptions = [
    {value: 'cost', label: 'Cost'},
    {value: 'name', label: 'Name'},
    {value: 'cardClass', label: 'Class'},
    {value: 'type', label: 'Type'},
  ];
  orderByProperty = '';
  // switches
  viewSwitch = true; // gallery = true / table = false
  formatSwitch = true; // wild = true / strandard = false
  sortingSwitch = false; // Ascending = false / Descending = true

  constructor(private orderFilter: OrderByPipePipe, config: NgbPopoverConfig) {
    // customize default values of popovers used by this component tree
    config.placement = 'right';
    // config.triggers = 'hover';
  }

  ngOnInit() { }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // detect filter changes
    if ( changes['filteredCards'] && changes['filteredCards'].previousValue !== changes['filteredCards'].currentValue ) {
      // if changes @Input() filteredCards
      // change order
      this.filteredCards = this.orderFilter.transform(this.filteredCards, this.orderByProperty, this.sortingSwitch);
      this.totalPages = Math.ceil(this.filteredCards / this.itemsPerPage);
      this.filteredCardsLength = this.filteredCards.length;
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
  }
  // view switch change
  onViewChange() {
    this.viewSwitch = !this.viewSwitch;
    this.changeView.emit(this.viewSwitch);
  }
  onOpenFilters() {
    // open filter menu
    this.openFilterMenu.emit();
  }
  // format switch chnage
  onFormatChange() {
    this.formatSwitch = !this.formatSwitch;
    this.changeFormat.emit(this.formatSwitch);
  }
  // items per page changed
  onItemsPerPageChange() {
    // this.itemsPerPage = numberPerPage.target.value;
    this.onPageChange(1);
  }
  onOrderChange() {
    // sort using Pipe
    this.filteredCards = this.orderFilter.transform(this.filteredCards, this.orderByProperty, this.sortingSwitch);
    // slice cards and go to page 1
    this.onPageChange(1);
  }
  onSortingChange() {
    // ascending / descending switch changed
    this.sortingSwitch = !this.sortingSwitch;
    this.onOrderChange();
  }
  // on card clicked
  onShowCardDetails(selectedCard: any) {
    if (this.previousCard === selectedCard) {
      this.changeDetailState.emit('closed');
      this.previousCard = '';
    } else {
      this.previousCard = selectedCard;
      this.cardSelected.emit(selectedCard);
    }
  }
}
