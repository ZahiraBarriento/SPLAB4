import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  alta : boolean = false;
  listado : boolean = false;
  button : string = "Alta";
  turno : boolean = false;
  user : any;

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem('userCatch');
    this.user = JSON.parse(this.user);
  }

  action(view){
    if(view == 'alta'){
      this.alta = true;
      this.turno = false;
      this.listado = false;
    }else if (view == 'listado'){
      this.listado = true;
      this.turno = false;
      this.alta = false;
    }else if (view == 'turno'){
      this.turno = true;
      this.alta = false;
      this.listado = false;
    }
  }

}
