import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
// import { log } from 'console';
import { ShowroomService } from '../../services/showroom.service';

@Component({
  selector: 'app-showrooms',
  templateUrl: './showrooms.component.html',
  styleUrls: ['./showrooms.component.css']
})
export class ShowroomsComponent implements OnInit{
  delarShipName:String='delarShipName';
  showRoomName:String='Select ShowRoom';
  vType?:String='ShowRoom Type';
   names!:any[];
   showroomNames!:any[];
   types=['2-wheeler','4-wheeler']
  constructor(private router: Router,private showroomService:ShowroomService){
  }
  ngOnInit(): void {
    this.showroomService.getDealerships().subscribe(data=>{
      this.names = data;
      
    })
  }


showroom(name:any){
  // console.log(name);
  
this.router.navigate(['superAdmin'],{
  queryParams:{name:name}
})
}
delarship(name:any){
  this.delarShipName = name;
  console.log(this.delarShipName);
  let data={
    dealershipName:this.delarShipName
  }
  this.showroomService.getSuperAdminShowrooms(data).subscribe((data)=>{
    console.log(data);
    this.showroomNames = data;
  })
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
