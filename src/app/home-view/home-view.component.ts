import { Component, OnInit } from '@angular/core';
import { CardCollectionService } from '../cardCollection.service';
import { Card } from '../cards.model';
import { Subscription } from 'rxjs';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { SearchFilterPipePipe } from '../SearchFilterPipe.pipe';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
  providers: [SearchFilterPipePipe],
  animations: [
    trigger('slideInOut', [
      state('closed', style({
        transform: 'translateX(-100%)'
      })),
      state('open', style({
        transform: 'translateX(0)'
      })),
      transition('closed <=> open', animate('400ms ease-in-out'))
    ])
  ]
})
export class HomeViewComponent implements OnInit {
  // card collection
  cardCollection: Card[] = [];
  filteredCards: any;
  private cardsSub: Subscription;

  // menu states
  menuState = 'closed';

  // filter options
  // type filters
  typeOptions = [
    {value: 'minion', label: 'Minion'},
    {value: 'spell', label: 'Spell'}
  ];
  // class filters
  classOptions = [
    {value: 'neutral', label: 'Neutral'},
    {value: 'priest', label: 'Priest'},
    {value: 'mage', label: 'Mage'},
    {value: 'hunter', label: 'Hunter'}
  ];

  // filter strings
  nameSearch = '';
  selectedClass = '';
  selectedType = '';

  constructor(private cardService: CardCollectionService, private searchFilter:SearchFilterPipePipe) { }

  ngOnInit() {
    this.cardService.getData();
    // will get initial array of posts from server
    this.cardsSub = this.cardService.getCardUpdateListener()
      .subscribe( cardData => {
        this.cardCollection = cardData;
        // no initial filters
        this.filteredCards = cardData;
        // console.log(this.cardCollection);
      });
  }
  // menu states
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'open' ? 'closed' : 'open';
  }
  // filter changes
  onFilterChange(changeSelected: any) {
    // check changes
    if (changeSelected.srcElement.id === 'className'){
      this.nameSearch = changeSelected.target.value;
    } else if (changeSelected.srcElement.id === 'typeFilter') {
      this.selectedType = changeSelected.target.value;
    } else if (changeSelected.srcElement.id === 'classFilter'){
      this.selectedClass = changeSelected.target.value;
    }
    // filter
    this.filteredCards = this.searchFilter.transform(this.cardCollection, this.nameSearch, this.selectedClass, this.selectedType);
  }
}
