import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-showcase',
  templateUrl: './promo-showcase.component.html',
  styleUrls: ['./promo-showcase.component.css']
})
export class PromoShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel();
  }

}
