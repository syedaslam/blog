import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  email="";
  aUser;

  constructor(
   
    private modalService: NgbModal, 
    private userService:UserService,
    private authService:AuthService
  ) {
    this.authService.appUser$.subscribe((data)=>this.aUser=data); 
  }

  ngOnInit() {
    
    this.authService.appUser$.subscribe((data)=>console.log(data)); 
    
  }
  open(content) {
    this.modalService.open(content,{ centered: true });
  }
  mailSubscribe(){
    this.userService.mailSubscribe(this.email);
    this.modalService.dismissAll();    
  }

  logout(){
    this.authService.logout();
  }
}
