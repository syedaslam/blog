import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeaturedBlogService {

  constructor(private db:AngularFireDatabase) { }
  // create(blog){
  //   return this.db.list('/blogs').push(blog);
  // }
  getAllFeatured(){
    return this.db.object('/featuredPost/').valueChanges();
  }
  // get(blogId){
  //   return this.db.object('/blogs/'+ blogId).valueChanges();
  // }
  // update(blogId,blog){
  //   this.db.object('/blogs/'+blogId).update(blog)
  // }
  // delete(blogId){
  //   this.db.object('/blogs/'+blogId).remove();
  // }
}
