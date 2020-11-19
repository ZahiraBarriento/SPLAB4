import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listado-materia',
  templateUrl: './listado-materia.component.html',
  styleUrls: ['./listado-materia.component.css']
})
export class ListadoMateriaComponent implements OnInit {

  materias : any;

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.firestore.getData('materias').subscribe(element => {
      this.materias = element;
    })
  }

}
