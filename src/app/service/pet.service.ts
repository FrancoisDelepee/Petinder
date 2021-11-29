import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private _url : string;

  get url(){
    return this._url;
  }
  constructor(private http: HttpClient) {
    this._url = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<any>{
    return this.http.get(this.url);
  }


}
