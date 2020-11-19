import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private bd : AngularFirestore) { }

  addData(collection : string, id : string, json){
    this.bd.collection(collection).doc(id).set(json);
  }

  getData(collection : string){
    return this.bd.collection(collection).snapshotChanges().pipe(map(rooms => {
      return rooms.map(item =>{
        const data : any = item.payload.doc.data();
        data.id = item.payload.doc.id;
        return data;
      })
    }))
  }
}
