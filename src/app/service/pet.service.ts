import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import { filter, map } from 'rxjs/operators';
import {Pet} from "../model/Pet";

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

  getPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>(this.url).pipe(map(pets => pets.sort((pet1, pet2) => pet1.name.localeCompare(pet2.name))));
  }

  getPetByName(name:string) : Observable<Pet>{
    return this.http.get<Pet>(`${this.url}/${name}`);
  }

  addPet(petToAdd : Pet){
  console.warn('petService is called' + petToAdd.name);
    return this.http.post(this.url, petToAdd);

  }

  deletePet(id : number) : Observable<any>{
    console.warn("deleting pet with id " + id);
    return this.http.delete(this.url + "/" + id);
  }

  play(text : string){
    console.warn(text);
    return this.http.post(this.url + "/sendText", text);
  }

}
