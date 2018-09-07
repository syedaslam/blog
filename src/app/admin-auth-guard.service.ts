import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private auth:AuthService,private userService:UserService,private router:Router) { }
  canActivate():Observable<boolean>{

  return this.auth.user$.pipe(
      switchMap(user => this.userService.get(user.uid)),
      map((appUser) =>{
        if(appUser['isAdmin'])
          return true

        this.router.navigate(['/login']);
  
        return false  
        })
    )
  }
}
