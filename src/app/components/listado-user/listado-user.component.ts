import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listado-user',
  templateUrl: './listado-user.component.html',
  styleUrls: ['./listado-user.component.css']
})
export class ListadoUserComponent implements OnInit {

  @Input('view') view;
  @Input('accion') accion;
  @Output() user = new EventEmitter();
  users;
  profesores: any = [];
  alumnos: any = [];
  alumnosSelect;

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.firestore.getData('users').subscribe(element => {
      this.users = element;

      this.users.forEach(element => {
        if (element.perfil == 'profesor') {
          this.profesores.push(element);
        } else if (element.perfil == 'alumno') {
          this.alumnos.push(element);
        }
      });
    })
  }

  changeUser(user){
    this.user.emit(user);
  }

  enviar(caaca){
    
  }
}
