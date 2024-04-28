import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Run} from "../types";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api-us-east-1.hygraph.com/v2/cl4ji8xe34tjp01yrexjifxnw/master';

  constructor(private http: HttpClient) { }

  // fetchProduct(slug: string): Observable<Run> {
  fetchProduct(slug: string): void {
    const query = `{
      cocktail(where: {slug: "${slug}"}) {
         category
         info
         ingredients
         instructions
         image {
            url
         }
         name
      }
    }`;
    // return this.http.post<any>(this.apiUrl, { query }).pipe(
    //   map(response => response.data.cocktail)
    // );
    // return {
    //   name: 'Family run',
    //   id: 'family-run',
    //   place: 'Ballymena',
    //   date: '2024-05-02',
    //   type: 'Flat run',
    //   latitude: 53.4239,
    //   longitude: -7.94069,
    // }
  }
}
