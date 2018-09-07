import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  product= {};
  id;
  constructor(private blogService:BlogService){
    
  }
  save(blog){  
    let now =new Date()
    blog.date = now.toLocaleDateString();
    this.blogService.create(blog);
  }

  delete(){
    
  }

  ngOnInit() {
  }
}
