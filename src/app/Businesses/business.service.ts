import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import Business from './Business';
import { businessArr } from './business-list/dummy-data-business';



@Injectable({
  providedIn: 'root'
})

export class BusinessService {

  constructor() { }

  getBusinessesArr(): Observable<Business[]> {
    return of(businessArr);
  }
  getBusinessInService(bushinessNumber: number): Observable<Business > {
    return this.getBusinessesArr().pipe(
      map((business: Business[]) =>
          business.find((b) => b.BusinessNumber === bushinessNumber)
      )
    );
  }

}
