import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule}  from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './globalComponent/header/header.component';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';
import { StudentListComponent } from './Component/student-list/student-list.component';
import { StudentDetailsComponent } from './component/student-details/student-details.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import{StudentsService} from './service/students.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    StudentListComponent,
    StudentDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
