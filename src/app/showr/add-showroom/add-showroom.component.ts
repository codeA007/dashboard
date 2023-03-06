import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-showroom',
  templateUrl: './add-showroom.component.html',
  styleUrls: ['./add-showroom.component.css']
})
export class AddShowroomComponent implements OnInit {

  constructor(private authService: AuthService) {}
  errorMessage ='';
  faCar = faCar;
  locationJs:any;
  latitude?:Number;
  longitude?:Number;
addShowroom =new FormGroup({
  delarShipName:new FormControl(''),
  showroomName: new FormControl(''),
  location:new FormControl(''),
});

ngOnInit(): void {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    this.latitude = position.coords.latitude;
    this.longitude =position.coords.longitude;
  })
}

submitShowroomDetails(){
  console.log(this.addShowroom.value)
console.log(this.authService.superAdmin);
this.authService.loginAccount(this.addShowroom.value).subscribe(data=>{
  console.log(data);
})
}
}
