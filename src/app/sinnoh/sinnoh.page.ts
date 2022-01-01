import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-sinnoh',
  templateUrl: './sinnoh.page.html',
  styleUrls: ['./sinnoh.page.scss'],
})
export class SinnohPage implements OnInit {
pokemons:any[]=[]
  constructor(
    private dataService:DataService
  ) {}
ngOnInit():void{
  this.dataService.getPokemons(108,386).subscribe((res:any)=>{
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
