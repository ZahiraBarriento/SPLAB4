import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-materias-cargo',
  templateUrl: './materias-cargo.component.html',
  styleUrls: ['./materias-cargo.component.css']
})
export class MateriasCargoComponent implements OnInit {

  user : any;

  constructor(private firestore : FirestoreService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('userCatch');
    this.user = JSON.parse(this.user);

    this.cargarMaterias(this.user);
  }

  cargarMaterias(user){
    this.firestore.getData('materias').subscribe(element =>{
      
    })
  }
}
