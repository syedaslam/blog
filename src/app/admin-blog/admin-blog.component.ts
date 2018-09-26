import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit,OnDestroy {

  blogList;
  filterBlogList;
  sub:Subscription;
  constructor(private blogService:BlogService) { 
    this.sub= this.blogService.getAll().subscribe((products)=>{this.filterBlogList = this.blogList = products});
  }

  filter(query){
    this.filterBlogList = (query) ?
      this.blogList.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):
      this.blogList;
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  ngOnInit() {
  }

}
