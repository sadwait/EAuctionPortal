import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BidDetails } from '../Models/bid-details';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  bidserviceUrl: string = "http://localhost:46917/e-auction/api/v1/Seller/show-bids/72ca09c8-65f6-4f6e-bcee-3d8684ef9169";

  constructor(private http: HttpClient) { }

  getBidDetails(productId: string): Observable<any> {
    return this.http.get(this.bidserviceUrl);
  }
}
