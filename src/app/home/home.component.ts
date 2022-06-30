import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Tan Dang';
  public age ;
  public vehicles = ['Toyota', 'Honda', 'Nissan'];

  constructor(private common: CommonService) {
    this.age = common.age;
   }

  ngOnInit(): void {
    console.log(this.name +' '+ this.age);
  }

  public tangTuoi() {
    this.common.age++;
    this.age = this.common.age;
    // this.vehicles.push(this.name + ': ' + this.age);
    // if (this.age === 20) {
    //   this.name = 'Chào anh Tân đẹpt trai';
    // }
  }
  public giamTuoi() {
    this.common.age--;
    this.age = this.common.age;
    // if (this.age <= 18) {
    //   this.name = 'Ê chưa đủ 18 kìa';
    // }
  }
}
