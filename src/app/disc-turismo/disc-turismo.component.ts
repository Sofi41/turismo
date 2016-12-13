import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { TurismoC } from '../turismos/turismo.model';

@Component({
  selector: 'disc-turismo',
  templateUrl: './disc-turismo.component.html',
  styleUrls: ['./disc-turismo.component.css']
})
export class DiscTurismoComponent implements OnInit {

  private turismoACrear:TurismoC;

  constructor(private http:Http) {
    this.turismoACrear = new TurismoC(); 
   }

  ngOnInit() {
  }

public guardarturismo()
  {
    this.http.post(
      "http://sofia_henao.net23.net/turismo/turismo.php",
      this.turismoACrear
    ).subscribe((response)=>{
      let respuesta = response.json();
      if(respuesta.resultado == 1){
        alert('Formulario guardado con éxito');
      }      
      else{
        alert("Hubo un error al guardar el Formulario");
      }
    });

      
  }

}
