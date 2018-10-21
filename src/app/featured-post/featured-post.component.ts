import { Component, OnInit } from '@angular/core';
import { FeaturedBlogService } from '../featured-blog.service';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {

  postKey;
  longFeatured$;
  featuredOne$;
  featuredTwo$;

  constructor(
    private featuredPostService:FeaturedBlogService,
    private blogService:BlogService,
    private router:Router
    ) { }

  ngOnInit() {
    this.featuredPostService.getAllFeatured().subscribe(data=>{
      this.postKey = data;
      if(this.postKey){
        this.longFeatured$=this.blogService.get(this.postKey.longFeatured);
        this.featuredOne$=this.blogService.get(this.postKey.featuredOne);
        this.featuredTwo$=this.blogService.get(this.postKey.featuredTwo);
      


      }
    });
       
  }
  continueRead(key){
    this.router.navigate(['/blogs/'+key]);
  }

}
