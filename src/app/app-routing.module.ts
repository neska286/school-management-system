import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { StudentDetailsComponent } from './component/student-details/student-details.component';
import { StudentListComponent } from './Component/student-list/student-list.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'studentList', component: StudentListComponent },
  { path: 'student-details/:id', component:StudentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
