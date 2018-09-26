import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  product= {};
  id;
  content;  
  saved=false;
 
  constructor(
    private blogService:BlogService,
    private route:ActivatedRoute,
    private router:Router,
    ){}

  ngOnInit() {
    this.id= this.route.snapshot.paramMap.get('id');
      if(this.id){
        this.blogService.get(this.id).pipe(take(1)).subscribe(x=>this.product=x); 
      }
  }

  save(blog){  
    if(this.id){
      this.blogService.update(this.id,blog)
    }
     else{
      let now =new Date()
      blog.date = now.toLocaleDateString();
      blog.content = this.content;
      this.blogService.create(blog).then(success=>{        
        console.log(success)
      },
      reject=>{
        window.alert(reject)
      });    
    }
    this.router.navigate(['/admin/blog']);
  }

  
  myCallback(event){
    console.log( event.html);
    this.content = event.html;
  }

   delete(){
     if (confirm("Are You Sure")){
      this.blogService.delete(this.id);
      this.router.navigate(['/admin/blog']);
     }
   }


}
