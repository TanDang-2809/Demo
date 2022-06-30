import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  public  studentForm = new FormGroup({
    // key và 1 object
    code : new FormControl(''),
    gender: new FormControl(''),
    firstName : new FormControl(''),
    lastName: new FormControl(''),
    dob : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    picture : new FormControl(''),
  })
  constructor(
    private common: CommonService, 
    private serverHttp: ServerHttpService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log('onsubmit');
    // console.log(this.profileForm);
    const newStudent = {};
    for (const controlName in this.studentForm.controls){
      if (controlName) {
        newStudent[controlName] = this.studentForm.controls[controlName].value;
        // console.log(controlName + ' = ' + this.studentForm.controls[controlName].value);
      }
    }
    // console.log('name = ' + this.studentForm.controls.name.value);
    // console.log('age = ' + this.studentForm.controls.age.value);
  // console.log(newStudent);
  this.serverHttp.addStudents(newStudent as Student).subscribe(data => {
      console.log('Student Added', data);
      // quay về trang sinh viên
      this.router.navigate(['students']);
    })
  }
}
