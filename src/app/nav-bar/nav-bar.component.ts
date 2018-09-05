import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  email="";

  constructor(
   
    private modalService: NgbModal, 
    private userService:UserService,
  ) {}

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content,{ centered: true });
  }
  mailSubscribe(){
    this.userService.mailSubscribe(this.email);
    this.modalService.dismissAll();
    
  }
}
