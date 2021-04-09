import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../service/students.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

studentId = 0;

studentDetail : Student;
  constructor(private activatedRoute : ActivatedRoute , private studentService : StudentsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
    console.log(res);
    this.studentId = res.id;
    })
    this.studentService.studentDetails(this.studentId).subscribe(studentData =>{
     
    this.studentDetail = studentData["data"];
      
    })
  }

}
