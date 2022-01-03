import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BidDetails } from '../Models/bid-details';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  bidserviceUrl: string = "http://localhost:46917/e-auction/api/v1/Seller/show-bids/63ccb3c9-ad30-456b-b0d4-46d2f8a10ad5";
  productUrl = "http://localhost:46917/e-auction/api/v1/Seller/get-products";

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.productUrl);
  }

  getBidDetails(productId: string): Observable<any> {
    return this.http.get(this.bidserviceUrl);
  }
}
