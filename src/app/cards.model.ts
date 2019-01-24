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

  formattedClass() {
    let cardName = this.cardClass;
    cardName = cardName.replace(/\b[a-z]/g, function(letter) { return letter.toUpperCase(); });
    cardName = cardName.replace(/'(S)/g, function(letter) { return letter.toLowerCase(); });
    return cardName;
   // return this.name.toLowerCase();
  }

  image() {
    return 'https://raw.githubusercontent.com/schmich/hearthstone-card-images/4.12.2/rel/' + this.dbfId + '.png';
  }

  goldImage() {
    return 'http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/' + this.id + '_premium.gif';
  }

  cardArt() {
    // return 'https://art.hearthstonejson.com/v1/512x/' + this.id + '.jpg';
    return 'https://art.hearthstonejson.com/v1/render/latest/enUS/512x/' + this.id + '.png';
  }
}
