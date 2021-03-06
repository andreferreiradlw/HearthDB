import { Component, OnInit } from '@angular/core';
import { CardCollectionService } from '../cardCollection.service';
import { Card } from '../cards.model';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
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
  isLoading = false;
  isLoaded = false;
  // card collection
  cardCollection: Card[] = [];
  filteredCards: any;
  private cardsSub: Subscription;
  cardSelected: any;
  // menu states
  menuState = 'closed';
  detailState = 'closed';
  // view state
  viewState = true; // gallery = true / table = false
  formatState = true; // wild = true / strandard = false

  constructor(private cardService: CardCollectionService) { }

  ngOnInit() {
    this.cardService.getData();
    // set loading
    this.isLoading = true;
    // will get initial array of posts from server
    this.cardsSub = this.cardService.getCardUpdateListener()
      .subscribe( cardData => {
        this.cardCollection = cardData;
        // trigger fade out
        this.isLoading = false;
        this.isLoaded = true;
      });
  }
  // menu states
  toggleMenu() {
    if (this.menuState === 'closed' && this.detailState === 'open') {
      this.menuState = 'open';
      this.detailState = 'closed';
    } else if (this.detailState === 'closed') {
      this.menuState = this.menuState === 'open' ? 'closed' : 'open';
    } else {
      this.detailState = 'closed';
    }
  }
  closeMenu(event: any) {
    // console.log(event.target.id);
    if (event.target.id === 'card-container' || event.target.id === '' && this.viewState === true) {
      // close the details menu first
      if (this.detailState === 'open') {
        this.detailState = 'closed';
      } else {
        this.menuState = 'closed';
      }
    }
  }
  onDetailsClosed(event: any) {
    this.detailState = 'closed';
  }
  // events
  onFilteredCards(filteredCards: any) {
    // trigger input for Card View Component
    this.filteredCards = filteredCards;
  }
  onCardSelected(cardDetails: any) {
    this.cardSelected = cardDetails;
    // enable card details side menu component
    this.detailState = 'open';
  }
  onChangeDetailState(newDetailState: any) {
    this.detailState = newDetailState;
  }
  onViewChange(cardView: boolean) {
    this.viewState = cardView;
  }
  onFormatChange(cardFormat: boolean) {
    this.formatState = cardFormat;
  }
}
