import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-kanto',
  templateUrl: 'kanto.page.html',
  styleUrls: ['kanto.page.scss']
})
export class KantoPage {
  pokemons:any[]=[]
  constructor(
    private dataService:DataService
  ) {}
ngOnInit():void{
  this.dataService.getPokemons(151,0).subscribe((res:any)=>{
    res.results.forEach(res => {
      this.dataService.getMoreData(res.name).subscribe((uniqResponse:any)=>{
        this.pokemons.push(uniqResponse)
        this.pokemons.sort(function(a:any,b:any){
          return a.id - b.id
        })
      })
    });
  })
}}
