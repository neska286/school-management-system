import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import {StudentsService} from '../../service/students.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students : Student[];

  constructor(private studentService : StudentsService) { }

  ngOnInit(): void {
    this.studentService.getStudent().subscribe(res =>{
     this.students = res["data"];
    })
  }

}
