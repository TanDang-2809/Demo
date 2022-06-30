import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public name = '';
  public password = '';
  public vehicles = ['Toyota', 'Honda', 'Nissan'];
  private selectedVehicle = '';
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.name);
    console.log(this.password);
    console.log(this.selectedVehicle);
  }

  public selectVehicle(event){
    // console.log("selectedVehicle :", event.target.value);
    this.selectedVehicle = event.target.value;
  }
}
