import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent implements OnInit {

  //#region Get
  get correo() {
    return this.registerForm.get("correo");
  }

  get contrasenia() {
    return this.registerForm.get('contrasenia');
  }
  //#endregion

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  //#region Validators
  registerForm = this.formBuilder.group({
    correo: ['', [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
    ]],
    contrasenia: ['', [
      Validators.required,
      Validators.minLength(8)
    ]]
  });
  //#endregion

  onSubmitRegister(){
    this.authService.register(this.correo.value, this.contrasenia.value, 'admin').then(res =>{
      this.router.navigate(['/login']);
    }).catch(error => console.log("Error", "Algo salió mal."));
  }

}
