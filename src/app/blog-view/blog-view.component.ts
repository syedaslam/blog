import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  id;
  blog;
  constructor(private route:ActivatedRoute,private blogService:BlogService,private router:Router) { }

  ngOnInit() {
      this.id= this.route.snapshot.paramMap.get('id');
      this.blogService.get(this.id).subscribe(data=>{
        if(!data)
        this.router.navigate(['/home']);
        else
        this.blog = data;
      })
     
  }

}
