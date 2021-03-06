import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  mailSubscribe(mail){
    return this.db.list('/emailList').push(mail);
  }

  save(user:firebase.User){   
    this.db.object('/users/' + user.uid).update({
      name:user.displayName,
      email:user.email
    })
  }
  
  get(uid:string){
    return this.db.object('/users/' + uid).valueChanges();
  }
  
}
