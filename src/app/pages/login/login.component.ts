import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users : any [];

  //#region Get
  get correo() {
    return this.loginForm.get("correo");
  }

  get contrasenia() {
    return this.loginForm.get('contrasenia');
  }
  //#endregion

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService,
    private firestore : FirestoreService) { }

  ngOnInit(): void {
    this.firestore.getData('users').subscribe(element =>{
      this.users = element;  
    })
  }

  //#region Validators
  loginForm = this.formBuilder.group({
    correo: ['', [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
    ]],
    contrasenia: ['', [
      Validators.required,
      Validators.minLength(8)
    ]],
  });
  //#endregion

  onSubmitLogin(){
    this.authService.login(this.correo.value, this.contrasenia.value).then(res => {
      this.users.forEach(element =>{
        if(element.email == this.correo.value)
          localStorage.setItem('userCatch', JSON.stringify(element));
      })
      this.router.navigate(['/home']);
    }).catch(error => alert(error))
  }

}
