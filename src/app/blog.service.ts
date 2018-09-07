import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private db:AngularFireDatabase) { }
  create(blog){
    return this.db.list('/blogs').push(blog);
  }
  getAll(){
    return this.db.list('/blogs/').snapshotChanges().pipe(
      map((changes) => 
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  get(blogId){
    return this.db.object('/blogs/'+ blogId).valueChanges();
  }
  update(blogId,blog){
    this.db.object('/blogs/'+blogId).update(blog)
  }
  delete(blogId){
    this.db.object('/blogs/'+blogId).remove();
  }
}
