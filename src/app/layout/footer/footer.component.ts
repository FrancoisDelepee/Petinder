import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _year:number;

  get year(){
    return this._year;
  }

  constructor() {
    this._year = 2021;
  }

  ngOnInit(): void {

  }

}
