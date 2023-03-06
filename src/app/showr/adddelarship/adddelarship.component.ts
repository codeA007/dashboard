import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';

@Component({
  selector: 'app-adddelarship',
  templateUrl: './adddelarship.component.html',
  styleUrls: ['./adddelarship.component.css']
})
export class AdddelarshipComponent {
  addShowroom =new FormGroup({
    delarShipName:new FormControl(''),
    showroomName: new FormControl(''),
    location:new FormControl(''),
  });

  submitShowroomDetails(){
    console.log(this.addShowroom.value)
  }
}
