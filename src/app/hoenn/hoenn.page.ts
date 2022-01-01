import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-hoenn',
  templateUrl: 'hoenn.page.html',
  styleUrls: ['hoenn.page.scss']
})
export class HoennPage {
pokemons:any[]=[]
  constructor(
    private dataService:DataService
  ) {}
ngOnInit():void{
  this.dataService.getPokemons(135,251).subscribe((res:any)=>{
    res.results.forEach(res => {
      this.dataService.getMoreData(res.name).subscribe((uniqResponse:any)=>{
        this.pokemons.push(uniqResponse)
        this.pokemons.sort(function(a:any,b:any){
          return a.id - b.id
        })
      })
    });
  })
}
}
