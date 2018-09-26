import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogArray=[];

  constructor(private blogService:BlogService,private router:Router) { }

  ngOnInit() {
    this.blogService.getAll().subscribe(data=>this.blogArray=data)
  }
  continueRead(key){
    this.router.navigate(['/blogs/'+key]);
  }
}
