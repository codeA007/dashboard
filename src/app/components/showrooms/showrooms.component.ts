import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-showrooms',
  templateUrl: './showrooms.component.html',
  styleUrls: ['./showrooms.component.css']
})
export class ShowroomsComponent {
 delarShipName:String='delarShipName';
 showRoomName:String='Select ShowRoom';
 vType?:String='ShowRoom Type';
  names=[
    {
      name:'Nagsanthi'
    },
    {
      name:'KIA'
    }
  ]
  types=['2-wheeler','4-wheeler']
  constructor(private router: Router){}
showroom(name:any){
  // console.log(name);
  
this.router.navigate(['superAdmin'],{
  queryParams:{name:name}
})
}
delarship(name:any){
  this.delarShipName = name;
}
typeBtn(type:string){
  this.vType = type;
}
showroomName(name:any){
  this.showRoomName = name;
}

sendShowRoom(){
  const sendDetails={
    delarShipName:this.delarShipName,
    type:this.vType,
    showRoomName:this.showRoomName,
  }  
  console.log(sendDetails);
  this.router.navigate(['superAdmin'],{
    queryParams:{name:this.delarShipName,type:this.vType,showRoomName:this.showRoomName}
  })
}

}
