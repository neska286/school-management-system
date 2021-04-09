import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import {StudentsService} from '../../service/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students : Student[];
  totalRecordes: string;
  p:number = 1;

  constructor(private studentService : StudentsService) { 
    
  }

  ngOnInit(): void {
    this.studentService.getStudent().subscribe(res =>{
      console.log(res);
      this.students = res["data"];
     })
  }

}
