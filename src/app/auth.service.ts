import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { BlogService } from './blog.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<firebase.User>;

  constructor(
    private afAuth:AngularFireAuth,
    private route:ActivatedRoute,
    private userService:UserService
  ) { 
    this.user$=this.afAuth.authState;
  }

  loginWithGoogle(){
    let returnUrl =this.route.snapshot.queryParamMap.get('returnUrl') ||'/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()) 
       
  }
  loginWithFb(){
    let returnUrl =this.route.snapshot.queryParamMap.get('returnUrl') ||'/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())       
  }

  logout(){
    this.afAuth.auth.signOut();    
  }

  get appUser$(){
   
    return this.user$
    .pipe(switchMap(user=>{
      if (user) return this.userService.get(user.uid)
    
      return of(null);
    })
    )
  }
}
