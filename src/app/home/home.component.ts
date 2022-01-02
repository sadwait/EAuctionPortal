import { Component, OnInit } from '@angular/core';
import { BidDetails } from '../Models/bid-details';
import { BidService } from '../Services/bid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bidInfo: BidDetails = new BidDetails();
  productId: any;
  constructor(private bidService: BidService) { }

  ngOnInit(): void {    
    this.getBidDeatils();
  }

  getBidDeatils() {
    this.bidService.getBidDetails(this.productId).subscribe({
      next: (data) => {
        this.bidInfo = data;
      },
      error: (err) => { },
      complete: () => { }
    });
  }

}
