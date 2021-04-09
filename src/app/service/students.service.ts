import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Student} from '../student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

    uri = "http://localhost:8080/users/";

  constructor( private httpClient : HttpClient) { }

  getStudent(): Observable<Student[]>{
    const URL = "https://reqres.in/api/users?page=[page_number]&per_page=[students_per_page";

    return this.httpClient.get<Student[]>(URL)
  }
studentDetails(studentId){
  const URL = "https://reqres.in/api/users/"+studentId;
  return this.httpClient.get(URL);
}

addUser(email,password){
  // call api
 const  uri = "http://localhost:8080/users/";
  const user = {
    email: email,
    password: password
  };
  console.log(user)
  this.httpClient.post(uri+"signup",user,{}).subscribe(resp=>{
 console.log("Result")
console.log(resp)
  },err=>{
console.log(`Error name: ${err.email}`)
console.log(`Error message: ${err.message}`)
console.log(err)
  })

}

loginUser(email,password){
 

  let headersVal = new HttpHeaders().set("email",email).set("password",password)  
  console.log(headersVal)
  return this.httpClient.get(this.uri+"login",{headers:headersVal}).toPromise();
  
}// end od login user

}
