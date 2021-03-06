import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';

const routes: Routes = [
  { 
    path: 'signup',
    component: SignupComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'admin/blog',
    component:AdminBlogComponent,
    canActivate:[AuthGuard,AdminAuthGuard]
  },
  {
    path:'author/blog-form/:id',
    component:BlogFormComponent,
    canActivate:[AuthGuard,AdminAuthGuard]
  },
  {
    path:'blogs/:id',
    component:BlogViewComponent
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'prefix'
  }
];

@NgModule({
  imports: [  
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
