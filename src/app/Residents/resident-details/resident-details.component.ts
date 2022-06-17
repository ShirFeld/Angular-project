import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import Resident from '../Resident';
import {RegisterService} from '../register.service'
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-resident-details',
  templateUrl: './resident-details.component.html',
  styleUrls: ['./resident-details.component.scss']
})
export class ResidentDetailsComponent implements OnInit {
 
  resident: Observable<Resident>;

  constructor(private route: ActivatedRoute,private router: Router, private service: RegisterService) {}

  ngOnInit(): void {
    this.resident = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getResidentById(params.get('id'))
      )
    );
  }

  goBack() {
    // router.navigate() - a function that gets an array of values(parameters), 
    // and go to that URL in the website
    this.router.navigate(['/residents']);
  }

}
