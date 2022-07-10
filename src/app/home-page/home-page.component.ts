import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public isActive :boolean =false;
  constructor(private elementRef: ElementRef) { }
  
//   ngAfterViewInit() {
//     this.elementRef.nativeElement.ownerDocument
//         .body.style.backgroundColor = '#e1fbf5';
// }
  ngOnInit(): void {
  }

  
}
