import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: boolean= false;
  authCurrent;
  perfil : string;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.auth();
  }

  onSingUp(){
    this.user = false;
    localStorage.removeItem('userCatch');
    this.authService.exit();
  }

  auth(){
    this.authService.getUserAuth().subscribe(user =>{
      if(user != null){
        this.user = true;
      }
    })
  }
}
