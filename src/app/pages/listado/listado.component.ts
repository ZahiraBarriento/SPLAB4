import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  vista : boolean;
  profe : boolean = false;
  alumno : boolean = false;
  accion : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  show(view){
    if(view == 'profe'){
      this.vista = true;
      this.profe = true;
      this.alumno = false;
    }else{
      this.alumno = true;
      this.vista = false;
      this.profe = false;
    }
  }

}
