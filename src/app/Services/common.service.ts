import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {//services : dịch vụ dùng để dùng chung cho các components
  public age = 10;
  public totalStudents = 0;
  constructor() {}

  public tangTuoi() {
    this.age++;
  }

  public setTotalStudents(total: number) {
    this.totalStudents = total;
    console.log('total' + total);
  }
}
