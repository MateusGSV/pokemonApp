import { Component } from '@angular/core';
import { PokemonAPIService } from './../services/pokemon-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  valor:any = "";
  /*pokemon: any = {
    id: '',
    name: '',
    power: '',
    abilities: '',
    height: '',
    weight: '',
    image:''
  };*/

  pokemon: any = {
    id: '',
    name: '',
    power: '',
    abilities: '',
    height: '',
    weight: '',
    image:''
  };

  result:any = {}

  constructor(  
    private pokeAPIService: PokemonAPIService
  ) {this.buscarPokemonRandom()}
  setValor(valor:any){
    this.valor = valor;
  }
  getValor(){
    return this.valor;
  }
  buscarPokemonRandom(){
    this.pokeAPIService.getPokeAPIService().subscribe((value)=> {
      //console.log(JSON.parse(JSON.stringify(value)));
      this.pokemon.id = JSON.parse(JSON.stringify(value))['id'];
      this.pokemon.name = JSON.parse(JSON.stringify(value))['name'];
      this.pokemon.power = JSON.parse(JSON.stringify(value))['power'];
      this.pokemon.abilities = JSON.parse(JSON.stringify(value))['abilities'].length;
      this.pokemon.height = JSON.parse(JSON.stringify(value))['height'];
      this.pokemon.weight = JSON.parse(JSON.stringify(value))['weight'];
      this.pokemon.image = JSON.parse(JSON.stringify(value))['sprites']['other']["official-artwork"]['front_default'];
      this.pokeAPIService.setPokemon1(value);
      this.pokeAPIService.setResultadoBatalha();
    });
    
  }
  buscarPokemon(valor:any){
    //console.log(valor);
    
    this.pokeAPIService.getPokeAPIService(parseInt(valor)).subscribe((value)=> {
      //console.log(JSON.parse(JSON.stringify(value)));
      this.pokemon.id = JSON.parse(JSON.stringify(value))['id'];
      this.pokemon.name = JSON.parse(JSON.stringify(value))['name'];
      this.pokemon.power = JSON.parse(JSON.stringify(value))['power'];
      this.pokemon.abilities = JSON.parse(JSON.stringify(value))['abilities'].length;
      this.pokemon.height = JSON.parse(JSON.stringify(value))['height'];
      this.pokemon.weight = JSON.parse(JSON.stringify(value))['weight'];
      this.pokemon.image = JSON.parse(JSON.stringify(value))['sprites']['other']["official-artwork"]['front_default'];
      this.pokeAPIService.setPokemon1(value);
      this.pokeAPIService.setResultadoBatalha();
    });
  }
}
