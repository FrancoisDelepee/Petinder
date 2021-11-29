import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _title : string;

  get title():string{
    return this._title;
  }

  constructor() {
    this._title = "Funny title";
  }

  ngOnInit(): void {
  }


}
