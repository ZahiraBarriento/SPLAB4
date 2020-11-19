import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public AFauth : AngularFireAuth, 
    private router: Router,
    private firestore : FirestoreService) { }

  login(email:string, password:string)
  {
    return new Promise((resolve, rejects) =>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(res =>{
        resolve(res);
      }).catch(error => rejects(error));
    });
  }

  register(email:string, password:string, perfil : string)
  {
    return new Promise((resolve, rejects) =>{
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res =>{
        const uid = res.user.uid;
        var json = {
          uid : uid,
          email : email,
          password : password,
          perfil : perfil
        }
        this.firestore.addData('users', uid, json);
        resolve(res);
      }).catch(error => rejects(error));
    });
  }

  exit()
  {
    this.AFauth.signOut().then(() =>{
      this.router.navigate(['/login']);
    })
  }

  getCurrentUser()
  {
    return this.AFauth.authState.pipe(first()).toPromise();
  }

  getUserAuth()
  {
    return this.AFauth.authState
  }
}
