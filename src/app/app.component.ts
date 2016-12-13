import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { TurismoC } from './turismos/turismo.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  turismoList:Array<TurismoC> = new Array<TurismoC>();

  constructor(private http:Http){

  }

  listarTurismo(){
    this.http
    .get("http://sofia_henao.net23.net/turismo/turismo.php")
    .subscribe((response)=>{
      this.turismoList = response.json();
      console.log(this.turismoList);
      let listarturis = document.getElementById("listarturis");
      listarturis.style.visibility = "visible";
    });            
  }

}
