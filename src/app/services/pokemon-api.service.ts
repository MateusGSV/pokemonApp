import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {
  pokemon1: any = {
    id: '',
    name: '',
    power: '',
    abilities: '',
    height: '',
    weight: '',
    image:''
  };
  pokemon2: any = {
    id: '',
    name: '',
    power: '',
    abilities: '',
    height: '',
    weight: '',
    image:''
  };

  resultadoBatalha: string = "";

  constructor(private httpClient: HttpClient) { }

  public setResultadoBatalha(){
    if(parseInt(this.pokemon1.abilities)> parseInt(this.pokemon2.abilities)){
      this.resultadoBatalha = 'Perdeu';
    }else if(parseInt(this.pokemon1.abilities) < parseInt(this.pokemon2.abilities)){
      this.resultadoBatalha = 'Ganhou';
    }else{
      this.resultadoBatalha = 'Empate';
    }
  }

  public getResultadoBatalha(){
    return this.resultadoBatalha;
  }

  public getPokeAPIService(id: number = Math.floor(Math.random() * 100)){
    return this.httpClient.get (`https://pokeapi.co/api/v2/pokemon/${id}`); 
  }

  public setPokemon1(dados:object){
    
    this.pokemon1.id = JSON.parse(JSON.stringify(dados))['id'];
    this.pokemon1.name = JSON.parse(JSON.stringify(dados))['name'];
    this.pokemon1.power = JSON.parse(JSON.stringify(dados))['power'];
    this.pokemon1.abilities = JSON.parse(JSON.stringify(dados))['abilities'].length;
    this.pokemon1.height = JSON.parse(JSON.stringify(dados))['height'];
    this.pokemon1.weight = JSON.parse(JSON.stringify(dados))['weight'];
    this.pokemon1.image = JSON.parse(JSON.stringify(dados))['sprites']['other']["official-artwork"]['front_default'];

    //console.log([this.pokemon1,this.pokemon2]);
      
  }

  public setPokemon2(dados:object){
    
    this.pokemon2.id = JSON.parse(JSON.stringify(dados))['id'];
    this.pokemon2.name = JSON.parse(JSON.stringify(dados))['name'];
    this.pokemon2.power = JSON.parse(JSON.stringify(dados))['power'];
    this.pokemon2.abilities = JSON.parse(JSON.stringify(dados))['abilities'].length;
    this.pokemon2.height = JSON.parse(JSON.stringify(dados))['height'];
    this.pokemon2.weight = JSON.parse(JSON.stringify(dados))['weight'];
    this.pokemon2.image = JSON.parse(JSON.stringify(dados))['sprites']['other']["official-artwork"]['front_default'];

    //console.log([this.pokemon1,this.pokemon2]);
      
  }

}
