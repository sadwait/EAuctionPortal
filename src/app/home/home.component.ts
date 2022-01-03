import { Component, OnInit } from '@angular/core';
import { BidService } from '../Services/bid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bidInfo: any;
  productId: any;
  productInfo: any;
  selectedProductId: any;

  constructor(private bidService: BidService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.bidService.getAllProducts().subscribe(data => {
      if (data) {
        this.productInfo = data;
      }
    });
  }

  getBidDeatils() {
    console.log(this.selectedProductId);
    this.bidService.getBidDetails(this.productId).subscribe({
      next: (data) => {
        this.bidInfo = data;
      },
      error: (err) => { },
      complete: () => { }
    });
  }

}
