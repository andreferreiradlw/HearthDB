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
  // {value: '', label: ''},
  // type filters
  typeOptions = [
    {value: 'hero', label: 'Hero'},
    {value: 'minion', label: 'Minion'},
    {value: 'spell', label: 'Spell'},
    {value: 'weapon', label: 'Weapon'}
  ];
  // class filters
  classOptions = [
    {value: 'druid', label: 'Druid'},
    {value: 'paladin', label: 'Paladin'},
    {value: 'rogue', label: 'Rogue'},
    {value: 'shaman', label: 'Shaman'},
    {value: 'warlock', label: 'Warlock'},
    {value: 'warrior', label: 'Warrior'},
    {value: 'neutral', label: 'Neutral'},
    {value: 'priest', label: 'Priest'},
    {value: 'mage', label: 'Mage'},
    {value: 'hunter', label: 'Hunter'}
  ];
  // mana cost filters
  manaCostOptions = [
    {value: '0', label: '0'},
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
    {value: '6', label: '6'},
    {value: '7', label: '7+'}
  ]
  // set filters
  setOptions = [
    {value: 'CORE', label: 'Basic'},
    {value: 'EXPERT1', label: 'Classic'},
    {value: 'HOF', label: 'Hall of Fame'},
    {value: 'NAXX', label: 'Naxxramas'},
    {value: 'GVG', label: 'Goblins vs Gnomes'},
    {value: 'BRM', label: 'Blackrock Mountain'},
    {value: 'TGT', label: 'The Grand Tournament'},
    {value: 'LOE', label: 'The League of Explorers'},
    {value: 'OG', label: 'Whispers of the Old Gods'},
    {value: 'KARA', label: 'One Night in Karazhan'},
    {value: 'GANGS', label: 'Mean Streets of Gadgetzan'},
    {value: 'UNGORO', label: 'Journey to Un\'goro'},
    {value: 'ICECROWN', label: 'Knigths of the Frozen Throne'},
    {value: 'LOOTAPALOOZA', label: 'Kobolds & Catacombs'},
    {value: 'GILNEAS', label: 'The Witchwood'},
    {value: 'BOOMSDAY', label: 'The Boomsday Project'},
    {value: 'TROLL', label: 'Rastakhan\'s Rumble'},
    {value: 'HERO_SKINS', label: 'Hero Skins'}
  ];
  // rarity filters
  rarityOptions = [
    {value: 'free', label: 'Free'},
    {value: 'common', label: 'Common'},
    {value: 'rare', label: 'Rare'},
    {value: 'epic', label: 'Epic'},
    {value: 'legendary', label: 'Legendary'}
  ];
  // filter strings
  nameSearch = '';
  selectedType = '';
  selectedClass = '';
  selectedManaCost = '';
  selectedSet = '';
  selectedRarity = '';

  constructor(private cardService: CardCollectionService, private searchFilter: SearchFilterPipePipe) { }

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
    } else if (changeSelected.srcElement.id === 'setFilter'){
      this.selectedSet = changeSelected.target.value;
    } else if (changeSelected.srcElement.id === 'rarityFilter'){
      this.selectedRarity = changeSelected.target.value;
    }
    // filter using pipe
    this.filteredCards = this.searchFilter
      .transform(
        this.cardCollection,
        this.nameSearch,
        this.selectedClass,
        this.selectedType,
        this.selectedSet,
        this.selectedRarity
      );
  }
}
