import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Card } from './cards.model';


@Injectable({
  providedIn: 'root'
})
export class CardCollectionService {
  private apiUrl = 'https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json';
  private cardCollectionUpdated = new Subject<Card[]>();
  constructor(private http: HttpClient) { }

  getData() {
    this.http.get<{cards: any}>(this.apiUrl)
      .subscribe(cardsData => {
        // convert object into array
        const cardsArray = Object.keys(cardsData).map(i => cardsData[i])
        const finalCards = [];
        cardsArray.forEach((entry) => {
          const card = new Card();
          card.id = entry.id;
          card.dbfId = entry.dbfId;
          card.name = entry.name;
          card.text = entry.text;
          card.flavor = entry.flavor;
          card.artist = entry.artist;
          card.attack = entry.attack;
          card.cardClass = entry.cardClass;
          card.collectible = entry.collectible;
          card.cost = entry.cost;
          card.elite = entry.elite;
          card.faction = entry.faction;
          card.health = entry.health;
          card.rarity = entry.rarity;
          card.set = entry.set;
          card.type = entry.type;
          finalCards.push(card);
        });
        // console.log(finalCards);
        this.cardCollectionUpdated.next(finalCards);
      });
  }
  getCardUpdateListener() {
    return this.cardCollectionUpdated.asObservable();
    // listen to the subject
  }
  /*
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
  */
}
