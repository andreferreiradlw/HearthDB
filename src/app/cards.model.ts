export class Card {
  id: string;
  dbfId: number;
  name: string;
  text: string;
  flavor: string;
  artist: string;
  attack: number;
  cardClass: string;
  collectible: boolean;
  cost: number;
  elite: boolean;
  faction: string;
  health: string;
  mechanics: [];
  rarity: string;
  set: string;
  type: string;

  constructor() {}

  formattedName() {
    return this.name ?
      this.name[0].toUpperCase() + this.name.substr(1) : '';
  }

  image() {
    return 'https://raw.githubusercontent.com/schmich/hearthstone-card-images/4.12.2/rel/' + this.dbfId + '.png';
  }

  cardArt() {
    return 'https://art.hearthstonejson.com/v1/512x/' + this.id + '.jpg';
  }
}
