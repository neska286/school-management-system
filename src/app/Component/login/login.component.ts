import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';
import{Router, ActivatedRoute} from '@angular/router';
import {StudentsService } from '../../service/students.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msg = new FormControl('')


  constructor(private fb: FormBuilder , private route : Router,private ss: StudentsService) { 
    //if(localStorage.getItem("token")== null){
      this.creatForm();
   // }else
    //localStorage.removeItem("token");
    //localStorage.removeItem("email");
    //this.route.navigate(["/"]);
   // window.open("/","_self")
   
  }
  creatForm(){
    this.loginForm = this.fb.group({
      email:['',Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password:['',Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    })
  }

  ngOnInit(): void {
  }
  login(email,password){
    // presenataion logic
    this.ss.loginUser(email,password).then(resp=>{
  
        localStorage.setItem("token",resp['Token']);
        localStorage.setItem("email",email);
        
        if(email=="admin"){
        this.route.navigate(['/home']);
      
        //this.msg.setValue("Login Succefully")
      }else{
        this.msg.setValue("email or password in incorrect")
      }
    }).catch(error=>{
      this.msg.setValue('Error:'+ error.message);
    })

}
}
