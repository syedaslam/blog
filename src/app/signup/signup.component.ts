import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loader = false;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  loginWithGoogle(){
    this.authService.loginWithGoogle();    
    this.loader=true;
  }

}
