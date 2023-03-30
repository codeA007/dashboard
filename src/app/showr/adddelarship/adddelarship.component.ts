import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';

@Component({
  selector: 'app-adddelarship',
  templateUrl: './adddelarship.component.html',
  styleUrls: ['./adddelarship.component.css']
})
export class AdddelarshipComponent {
  addShowroom =new FormGroup({
    dealershipName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  });

  submitShowroomDetails(){
    console.log(this.addShowroom.value)
  }
}
