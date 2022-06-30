import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students: Student[] = [];

  constructor(
    private common: CommonService, 
    private serverHttp: ServerHttpService,
    private router : Router
    ) {}

  ngOnInit(): void {
   this.loadData();
  }

    private loadData() {
        // lấy dữ liệu bên file server-http
    this.serverHttp.getStudents().subscribe((data) => {
      console.log('getStudents', data);
      this.students = data;
      this.common.setTotalStudents = (data.length);
      // console.log(this.common.totalStudents);
    });
    }

  public addStudent() {
    // tới trang student-form
    this.router.navigate(['student-form']);
  }

  public deleteStudent(studentId){
    console.log('student', studentId);
    this.serverHttp.deleteStudent(studentId).subscribe((data) => {
      console.log('delete', data);
      this.loadData();
    });
  }
}

