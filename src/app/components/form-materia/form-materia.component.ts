import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-form-materia',
  templateUrl: './form-materia.component.html',
  styleUrls: ['./form-materia.component.css']
})
export class FormMateriaComponent implements OnInit {

  professorMateria : any;
  correo;
  vista : boolean = true;

  //#region Get
  get name() {
    return this.materiaForm.get('name');
  }
  get quarter() {
    return this.materiaForm.get('quarter');
  }
  get coupons() {
    return this.materiaForm.get("coupons");
  }
  get year() {
    return this.materiaForm.get("year");
  }
  //#endregion

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public firestore : FirestoreService) { }

  ngOnInit(): void {
  }

  //#region Validators
  materiaForm = this.formBuilder.group({
    name: ['', [
      Validators.required
    ]],
    quarter: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    coupons: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    year: ['', [
      Validators.required,
    ]]
  });
  //#endregion

  setSeleccionado(user){
    this.professorMateria = user;
    this.correo = user.email;
  }

  onSubmitMateria(){
    const id = Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '').substr(0, 21);
    
    var json = {
      id : id,
      name : this.name.value,
      quarter : this.quarter.value,
      coupons : this.coupons.value,
      year : this.year.value,
      profesor : this.professorMateria
    }
    
    this.firestore.addData('materias', id, json);
    alert('Se ha dado de alta correctamente');
  }
}
