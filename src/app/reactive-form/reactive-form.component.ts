import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  // public name = new FormControl('');
  //biến và object
  public  profileForm = new FormGroup({
    // key và 1 object
    name : new FormControl(''),
    age: new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
  }

  // public updateName() {
  //   this.name.setValue('Tân Đặng');
  // }
  public onSubmit() {
    console.log('onsubmit');
    // console.log(this.profileForm);
    console.log('name = ' + this.profileForm.controls.name.value);
    console.log('age = ' + this.profileForm.controls.age.value);
  }
}
