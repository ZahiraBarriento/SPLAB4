import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //#region Get
  get correo() {
    return this.registerForm.get("correo");
  }

  get contrasenia() {
    return this.registerForm.get('contrasenia');
  }

  get perfil() {
    return this.registerForm.get("perfil");
  }
  //#endregion

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.registerForm)
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
    ]],
    perfil: ['', [
      Validators.required
    ]],
  });
  //#endregion

  onSubmitRegister(){
    this.authService.register(this.correo.value, this.contrasenia.value, this.perfil.value).then(res =>{
      this.router.navigate(['/login']);
    }).catch(error => console.log("Error", "Algo salió mal."));
  }

}
