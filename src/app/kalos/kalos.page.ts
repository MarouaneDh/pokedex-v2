import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-kalos',
  templateUrl: './kalos.page.html',
  styleUrls: ['./kalos.page.scss'],
})
export class KalosPage implements OnInit {
pokemons:any[]=[]
  constructor(
    private dataService:DataService
  ) {}
ngOnInit():void{
  this.dataService.getPokemons(72,649).subscribe((res:any)=>{
    res.results.forEach(res => {
      this.dataService.getMoreData(res.name).subscribe((uniqResponse:any)=>{
        this.pokemons.push(uniqResponse)
        this.pokemons.sort(function(a:any,b:any){
          return a.id - b.id
        })
        console.log(this.pokemons)
      })
    });
  })
}
}
