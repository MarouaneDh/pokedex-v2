import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  public id:string
  pokemon:any=[]
  prevPokemon:any=[]
  nextPokemon:any=[]
  nextId
  prevId
  types=[
    {name:"normal",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/1200px-Pok%C3%A9mon_Normal_Type_Icon.svg.png"},
    {name:"poison",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/800px-Pok%C3%A9mon_Poison_Type_Icon.svg.png"},
    {name:"psychic",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/1024px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png"},
    {name:"grass",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/1200px-Pok%C3%A9mon_Grass_Type_Icon.svg.png"},
    {name:"ground",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/768px-Pok%C3%A9mon_Rock_Type_Icon.svg.png"},
    {name:"ice",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/480px-Pok%C3%A9mon_Ice_Type_Icon.svg.png"},
    {name:"fire",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/768px-Pok%C3%A9mon_Fire_Type_Icon.svg.png"},
    {name:"rock",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/1024px-Pok%C3%A9mon_Rock_Type_Icon.svg.png"},
    {name:"dragon",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/1200px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png"},
    {name:"water",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/1024px-Pok%C3%A9mon_Water_Type_Icon.svg.png"},
    {name:"bug",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/1200px-Pok%C3%A9mon_Bug_Type_Icon.svg.png"},
    {name:"dark",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/640px-Pok%C3%A9mon_Dark_Type_Icon.svg.png"},
    {name:"fighting",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/2048px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png"},
    {name:"ghost",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/1024px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png"},
    {name:"steel",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/1024px-Pok%C3%A9mon_Steel_Type_Icon.svg.png"},
    {name:"flying",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/2048px-Pok%C3%A9mon_Flying_Type_Icon.svg.png"},
    {name:"electric",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1024px-Pok%C3%A9mon_Electric_Type_Icon.svg.png"},
    {name:"fairy",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/1024px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png"}
  ]
  constructor(private route:ActivatedRoute,
    private dataService:DataService,
    private router:Router) { }



  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id')
    this.nextId=Number(this.id)+1
    this.prevId=Number(this.id)-1
    this.dataService.getMoreData(this.id).subscribe(async (uniqResponse:any)=>{
        this.pokemon= await uniqResponse
        this.dataService.getMoreData(this.nextId).subscribe(async(uniqResponse:any)=>{
        this.nextPokemon= await uniqResponse
        console.log(this.nextPokemon)
      })
      this.dataService.getMoreData(this.prevId).subscribe(async(uniqResponse:any)=>{
        this.prevPokemon= await uniqResponse
        console.log(this.prevPokemon)
      })
      })

  }
  next(){
    this.router.navigateByUrl('/kanto/'+this.nextId)
  }
  prev(){
    this.router.navigateByUrl('/kanto/'+this.prevId)
  }
}
