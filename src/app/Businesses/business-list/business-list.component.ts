import { Component, OnInit } from '@angular/core';
import Business from '../Business';
import { BusinessService } from '../business.service';


@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent implements OnInit {

  businesses :Business[] =[];

  constructor(private service: BusinessService) { }

  ngOnInit(): void {
    this.getBusinesses();
  }

  getBusinesses(): void {
    this.service.getBusinessesArr().subscribe((businesses) => (this.businesses = businesses));
  }

  getBusinessByNumber(businessNumber: number): Business {
    let result: Business;
    this.service.getBusinessInService(businessNumber) .subscribe((res) => (result = res));
    return result;
  }

  getRowColorByProfit(monthlyProfit: number): string {
    if(monthlyProfit < 5000 ) return 'IndianRed' 
    return 'CornflowerBlue';
  }




}
