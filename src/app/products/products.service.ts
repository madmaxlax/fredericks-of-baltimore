/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Product {
  parentList: { id: string; name: string };
  idList: string;
  desc: string;
  name: string;
  shortLink: string;
  customFieldItems: any[];
  attachments: {
    url: string;
    name: string;
    previews: { height: number; width: number; url: string }[];
  }[];
  [name: string]: any;
}

interface TrelloData {
  id: string;
  cards: Product[];
  customFields: any[];
  labels: any[];
  lists: { id: string; name: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  private trelloURL =
    'https://trello.com/b/9aY3mAxo/fredericks-of-baltimore-artifacts-and-salvage.json';
  private products?: Product[];

  getProducts(): Observable<Product[]> {
    if (this.products && this.products.length) {
      return of(this.products);
    } else {
      const trelloData = this.http.get<TrelloData>(this.trelloURL).pipe(
        map((response) => {
          console.log(response);
          return response?.cards.map((card) => ({
            ...card,
            parentList: response.lists.find((trelloList) => trelloList.id === card.idList),
          }));
        }),
        catchError((e) => {
          console.log('Error getting Trello data: ', e);
          return null as any;
        })
      );
      return trelloData as any;
    }
  }
}
