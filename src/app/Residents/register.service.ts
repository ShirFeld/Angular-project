import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ResidentArr } from './dummy-data';
import Resident from './Resident';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  getResidentsService(): Observable<Resident[]> {
    return of(ResidentArr);
  }
  
  getResidentById(id: string): Observable<Resident> {
    return this.getResidentsService().pipe(
      map((resident: Resident[]) => resident.find((r) => r.Id === id))
    );
  }
}
