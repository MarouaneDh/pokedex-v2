import { Component } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-johto',
  templateUrl: 'johto.page.html',
  styleUrls: ['johto.page.scss']
})
export class JohtoPage {
pokemons:any[]=[]
  constructor(
    private dataService:DataService
  ) {}
ngOnInit():void{
  this.dataService.getPokemons(100,151).subscribe((res:any)=>{
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
