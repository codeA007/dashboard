import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { ShowroomService } from '../../services/showroom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-showroom',
  templateUrl: './add-showroom.component.html',
  styleUrls: ['./add-showroom.component.css']
})
export class AddShowroomComponent implements OnInit {

  constructor(private showroomService:ShowroomService ,private router:Router){}
  errorMessage ='';
  faCar = faCar;
  locationJs:any;
  latitude?:Number;
  longitude?:Number;
  vType?:String='ShowRoom Type';
  types=['2-wheeler','4-wheeler'];
addShowroom =new FormGroup({
  // delarShipName:new FormControl(''),
  showroomName: new FormControl(''),
  location:new FormControl(''),
  email: new FormControl(''),
  password:new FormControl('')
});
delarShipName:String='delarShipName';
names!:any[]

ngOnInit(): void {
  navigator.geolocation.getCurrentPosition((position) => {
    // console.log();
    console.log(position,"po");
    this.latitude = position.coords.latitude;
    this.longitude =position.coords.longitude;
  })

  this.showroomService.getDealerships().subscribe((data:any)=>{
    this.names = data;
    console.log(data);
    // data.forEach((name:any) => { 
    //   console.log(name);
    //   this.names.push(name.DName)
    // });
    console.log(this.names);
    
  })
}
delarship(name:any){
  this.delarShipName = name;
}
typeBtn(type:string){
  this.vType = type;
}
submitShowroomDetails(){
  // if(this.addShowroom.value.showroomName==''||this.addShowroom.value.email==''||this.addShowroom.value.)
  let newData = {...this.addShowroom.value,latitude:this.latitude,longitude:this.longitude,dealerShip:this.delarShipName,type:this.vType};
console.log(newData);
this.showroomService.addShowroom(newData).subscribe(data=>{
  console.log(data);
  if(data){
    this.router.navigate(['/showrooms']);
  }
})
}

}