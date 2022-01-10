import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BidService } from './bid.service';
import { HttpClientModule } from '@angular/common/http';

describe('BidService', () => {
  let service: BidService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ BidService]
    });
    service = TestBed.inject(BidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a collection of products', () => {
    const prodResponse = [{
      id: "fsad6673Zuwewe",
      productName: "Chain",
      category: "Ornaments",
      startingPrice: 100,
      bidEndDate: new Date("20/01/2022")
    }];

    let response;

    spyOn(service, 'getAllProducts').and.returnValues(of(prodResponse));
    service.getAllProducts().subscribe(x=>{
      response=x;
    })
    expect(response).toEqual(prodResponse);
  });

});
