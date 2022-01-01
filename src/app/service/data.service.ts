import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient
  ) { }

  //get pokemons
  getPokemons(limit,offset){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
  }

  //get more pokemon data

  getMoreData(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
