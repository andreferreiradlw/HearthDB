import { Component, OnInit, OnChanges, Input, Output, SimpleChange, EventEmitter } from '@angular/core';
import { SearchFilterPipePipe } from '../SearchFilterPipe.pipe';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css'],
  providers: [SearchFilterPipePipe],
})
export class FilterMenuComponent implements OnInit, OnChanges {
  // cards from api input
  @Input() collectibleCards: any;
  // send out filtered cards
  @Output() filteredCards = new EventEmitter();
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
  ];
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
  // initial cards
  initialCards: any;

  constructor(private searchFilter: SearchFilterPipePipe) { }

  ngOnInit() {
  }
  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // detect filter changes
    if ( changes['collectibleCards'] && changes['collectibleCards'].previousValue !== changes['collectibleCards'].currentValue ) {
      // if changes @Input() collectibleCards
      this.initialCards = changes['collectibleCards'].currentValue;
      // run initial load with empty filters
      this.filteredCards.emit(this.initialCards);
      // this.onFilterChange('');
    }
  }
  // filter changes
  onFilterChange(changeSelected: any) {
    // check changes
    if (changeSelected.srcElement.id === 'className') {
      this.nameSearch = changeSelected.target.value;
    } else if (changeSelected.srcElement.id === 'typeFilter') {
      this.selectedType = changeSelected.target.value;
    } else if (changeSelected.srcElement.id === 'classFilter') {
      this.selectedClass = changeSelected.target.value;
    } else if (changeSelected.srcElement.id === 'setFilter') {
      this.selectedSet = changeSelected.target.value;
    } else if (changeSelected.srcElement.id === 'rarityFilter') {
      this.selectedRarity = changeSelected.target.value;
    } else if (changeSelected.srcElement.id === 'manaCostFilter') {
      this.selectedManaCost = changeSelected.target.value;
    }
    // filter using pipe
    const emitFilteredCards = this.searchFilter
      .transform(
        this.initialCards,
        this.nameSearch,
        this.selectedClass,
        this.selectedType,
        this.selectedSet,
        this.selectedRarity,
        this.selectedManaCost
      );
    // card array to be emitted
    this.filteredCards.emit(emitFilteredCards);
  }

}
