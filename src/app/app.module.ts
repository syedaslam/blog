import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { CustomFormsModule } from 'ngx-custom-validators';
import { QuillModule } from 'ngx-quill';
import { MarkdownModule } from 'ngx-markdown';
import {DataTableModule} from "angular-6-datatable";

import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { FeaturedPostComponent } from './featured-post/featured-post.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignupComponent } from './signup/signup.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignupComponent,
    HomeComponent,
    BlogFormComponent,
    FeaturedPostComponent,
    BlogViewComponent,
    AdminBlogComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    GoTopButtonModule,
    BrowserAnimationsModule,
    QuillModule,
    MarkdownModule.forRoot(),
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
