import { Component } from '@angular/core';
import { PokemonAPIService } from './../services/pokemon-api.service';
import { PhotoService } from '../services/photo.service'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valor:any = "";
  pokemon: any = {
    id: '',
    name: '',
    power: '',
    abilities: '',
    height: '',
    weight: '',
    image:''
  };

  resultadoBatalha: any = {
    texto:"",
    cor:""
  };

  constructor(  
    private pokeAPIService: PokemonAPIService,
    public photoService: PhotoService
  ) {this.buscarPokemonRandom()}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  addPhotoToGallery(){
    this.photoService.addToNewGallery();
  }
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
      this.pokeAPIService.setPokemon2(value);
      this.pokeAPIService.setResultadoBatalha();

      this.resultadoBatalha.texto = this.pokeAPIService.getResultadoBatalha();

      if(this.pokeAPIService.getResultadoBatalha()=="Ganhou"){
        this.resultadoBatalha.cor = "success";
      }else if(this.pokeAPIService.getResultadoBatalha()=="Perdeu"){
        this.resultadoBatalha.cor = "danger";
      }else if(this.pokeAPIService.getResultadoBatalha()=="Empate"){
        this.resultadoBatalha.cor = "warning";
      }
     
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
      this.pokeAPIService.setPokemon2(value);
      this.pokeAPIService.setResultadoBatalha();
      
      this.resultadoBatalha.texto = this.pokeAPIService.getResultadoBatalha();

      if(this.pokeAPIService.getResultadoBatalha()=="Ganhou"){
        this.resultadoBatalha.cor = "success";
      }else if(this.pokeAPIService.getResultadoBatalha()=="Perdeu"){
        this.resultadoBatalha.cor = "danger";
      }else if(this.pokeAPIService.getResultadoBatalha()=="Empate"){
        this.resultadoBatalha.cor = "warning";
      }
      
    });
  }

  

}
