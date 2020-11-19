import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view-email',
  templateUrl: './view-email.component.html',
  styleUrls: ['./view-email.component.css']
})
export class ViewEmailComponent implements OnInit {

  correo : string;
  public estaLogeado = false;
  user : any;

  constructor(private auth : AuthService) { }

  async ngOnInit(){
    const user = await this.auth.getCurrentUser();
    this.user = user
    if(this.user)
    { 
      this.correo = this.user.email;
      this.estaLogeado = true;
    }
  }
}
