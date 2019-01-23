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
  // card collection
  cardCollection: Card[] = [];
  filteredCards: any;
  private cardsSub: Subscription;

  // menu states
  menuState = 'closed';

  constructor(private cardService: CardCollectionService) { }

  ngOnInit() {
    this.cardService.getData();
    // will get initial array of posts from server
    this.cardsSub = this.cardService.getCardUpdateListener()
      .subscribe( cardData => {
        this.cardCollection = cardData;
        // no initial filters
        // this.filteredCards = cardData;
        // console.log(this.cardCollection);
      });
  }
  // menu states
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'open' ? 'closed' : 'open';
  }
  closeMenu(event: any) {
    const nodeValue = event.target.id;
    if (nodeValue === 'card-container' || nodeValue === '') {
      this.menuState = 'closed';
    }
  }
  // events
  onFilteredCards(filteredCards: any) {
    // trigger input for Card View Component
    this.filteredCards = filteredCards;
  }
  onCardSelected(cardDetails: any) {
    console.log(cardDetails);
    // enable card details side menu component
  }
}
