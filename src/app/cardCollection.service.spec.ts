/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardCollectionService } from './cardCollection.service';

describe('Service: CardCollection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardCollectionService]
    });
  });

  it('should ...', inject([CardCollectionService], (service: CardCollectionService) => {
    expect(service).toBeTruthy();
  }));
});
