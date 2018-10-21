import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  id;
  blog;
  loader=true;
  constructor(private route:ActivatedRoute,private blogService:BlogService,private router:Router,private titleService: Title ) { }

  ngOnInit() {
      this.id= this.route.snapshot.paramMap.get('id');
      this.blogService.get(this.id).subscribe(data=>{
        this.loader=false;
        if(!data)
        this.router.navigate(['/home']);
        else
        this.blog = data;
        this.titleService.setTitle(this.blog.title)
      })
   
  }

}
