import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loader = true;

  blogArray=[];

  constructor(private blogService:BlogService,private router:Router,private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle("The Fifth Columnae")
    this.blogService.getAll().subscribe(data=>{
      this.loader=false;
      this.blogArray=data
    })
  }
  continueRead(key){
    this.router.navigate(['/blogs/'+key]);
  }
}
