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
  mechanics: string[];
  rarity: string;
  set: string;
  type: string;

  constructor() {}

  formattedClass() {
    const cardClass = this.cardClass.toLowerCase();
    return cardClass.charAt(0).toUpperCase() + cardClass.slice(1);
    /*
    let cardName = this.cardClass;
    cardName = cardName.replace(/\b[a-z]/g, function(letter) { return letter.toUpperCase(); });
    cardName = cardName.replace(/'(S)/g, function(letter) { return letter.toLowerCase(); });
    return cardName;
    */
  }

  formattedRarity() {
    const cardRarity = this.rarity.toLowerCase();
    return cardRarity.charAt(0).toUpperCase() + cardRarity.slice(1);
  }

  formattedType() {
    const cardType = this.type.toLowerCase();
    return cardType.charAt(0).toUpperCase() + cardType.slice(1);
  }

  getClassIcon() {
    const path =
      "../../assets/class_icons/" + this.cardClass.toLowerCase() + ".png";
    return path;
  }

  getFormattedSet() {
    if (this.set === "CORE") {
      return "Basic";
    } else if (this.set === "EXPERT1") {
      return "Classic";
    } else if (this.set === "HOF") {
      return "Hall of Fame";
    } else if (this.set === "NAXX") {
      return "Naxxramas";
    } else if (this.set === "GVG") {
      return "Goblins vs Gnomes";
    } else if (this.set === "BRM") {
      return "Blackrock Mountain";
    } else if (this.set === "TGT") {
      return "The Grand Tournament";
    } else if (this.set === "LOE") {
      return "The League of Explorers";
    } else if (this.set === "OG") {
      return "Whispers of the Old Gods";
    } else if (this.set === "KARA") {
      return "One Night in Karazhan";
    } else if (this.set === "GANGS") {
      return "Mean Streets of Gadgetzan";
    } else if (this.set === "UNGORO") {
      return "Journey to Un'Goro";
    } else if (this.set === "ICECROWN") {
      return "Knights of the Frozen Throne";
    } else if (this.set === "LOOTAPALOOZA") {
      return "Kobolds & Catacombs";
    } else if (this.set === "GILNEAS") {
      return "The Witchwood";
    } else if (this.set === "BOOMSDAY") {
      return "The Boomsday Project";
    } else if (this.set === "TROLL") {
      return "Rastakhan's Rumble";
    } else if (this.set === "HERO_SKINS") {
      return "Hero Skins";
    }
  }

  image() {
    return `https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${this.id}.png`;
  }
}
