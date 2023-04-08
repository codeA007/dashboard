import { Component,OnInit,OnDestroy} from '@angular/core';
import { faCameraRetro,faPoll,faList,faSearch} from '@fortawesome/free-solid-svg-icons';
import { ShowroomService } from '../../services/showroom.service';
import {DataService} from '../../data.service';
import { CameraService } from '../../services/camera.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as Options from '../../../assets/config.json';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit ,OnDestroy{
  constructor(private showroomService:ShowroomService,private dataService: DataService,private sanatizer:DomSanitizer,private cameraService:CameraService){}
  names=[]
  ngOnInit(): void {
    this.showroomService.getShowroomsList().subscribe((data)=>{
      this.names = data.showrooms;
      console.log(data);
    }) 
  }
  page = 1;
  showImg ='false';
  imgUrl = ''
  faCameraRetro = faCameraRetro;
  faPoll = faPoll;
  faList = faList;
  id!: NodeJS.Timer;
  btnName='START';
  startANPR=true;
  ip=`http://${(Options as any).default.ip}:${(Options as any).default.port}`;
  showroomName:String='Select ShowRoomName';
  // ip=`http://${(Options as any).default.ip}/${(Options as any).default.port}`;
  datas:any[]=[
//     { imageUrl:'/cam1.jpg',
//     // { imageUrl:'http://192.168.1.101:5000/getImage/cam1.jpg',
//     numberPlate:'ka65 Q7080',
//     timeStamp:'12:39PM',
//     any:'Any'
//   },
//  { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
//  numberPlate:'ka65 Q7080',
//  timeStamp:'12:39PM',
//  date:'2023/04/05',
//  entryTime:'12:30',
//  exitTime:'12:40'
// },
// { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
// numberPlate:'ka65 Q7080',
// timeStamp:'12:39PM',
// any:'Any'
// },
// { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
// numberPlate:'ka65 Q7080',
// timeStamp:'12:39PM',
// any:'Any'
// },  { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
// numberPlate:'ka65 Q7080',
// timeStamp:'12:39PM',
// any:'Any'
// },
//    { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
//    numberPlate:'KA65 Q7081',
//    timeStamp:'12:39PM',
//    any:'Any'
//  },
//  { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
//  numberPlate:'KA65 Q7082',
//  timeStamp:'12:39PM',
//  any:'Any'
//  },
   ];
   totalRecords:any = this.datas.length;
   pageChange(){

   }
   bigImage(image:any){
    console.log(image);
    this.showImg ='true'
    this.imgUrl = this.ip+'/getNumberplate/'+image.NP_img_path;
    console.log(this.showImg);
   }

   vImage(image:any){
    console.log(image);
    this.showImg ='true'
    this.imgUrl = this.ip+'/getVehicle/'+image.vehicle_img_path;
    console.log(this.showImg);
   }
   showroom(name:any){
    this.showroomName = name;
  }

  start(){
    console.log(this.showroomName);
    let start = {
      showroomName:'KIA',
      startANPR:this.startANPR
    }
    this.btnName = 'STOP';
    this.showroomService.startANPR(start).subscribe((data)=>{
      console.log(data);
      if(this.startANPR == false){
        this.btnName = 'START'
        this.ngOnDestroy();
        this.startANPR = true;
        return
      }
      if(data.result == 'STARTED'){
        this.startANPR = false;
        this.id =setInterval(()=>{
          this.cameraService.anprData().subscribe(data => {
            console.log(data);
            if(data){
              this.datas = data;
              // this.startANPR = false;
            }
          //  this.datas.unshift(
          //    { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
          //      numberPlate:data.id,
          //      timeStamp:'12:39PM',
          //      any:'Any'
          //    }
          //  );
         //  this.datas = [
         //   { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
         //   numberPlate:data.todo,
         //   timeStamp:'12:39PM',
         //   id:'Any'
         // }
         //  ];
         })
       },2000)
      }
    })
  }

   hideModle(e:any){
  
      if(e.target.className=='modalBoxContainer'||e.target.className=='modalContainer'){
        this.showImg ='false';
}
   }

   ngOnDestroy() {
    clearInterval(this.id);
  }
  }
