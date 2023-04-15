import { Component,OnInit,OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import {DataService} from '../../data.service';
import { Router,ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CameraService } from '../../services/camera.service';
import { ShowroomService } from '../../services/showroom.service';
import * as Options from '../../../assets/config.json';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  id!: NodeJS.Timer;
  datas:Array<any>=[];
  page = 1;
  ip=`http://${(Options as any).default.ip}:${(Options as any).default.port}`;
  totalRecords:any = this.datas.length;
  showImg?: string;
  imgUrl: any;
  btnName='START';
  startANPR=true;
  timmer = (Options as any).default.timmer;
  constructor(private dataService: DataService,private showroomService:ShowroomService,private cameraService:CameraService){}

  ngOnInit() {
    // setTimeout(()=>{
    //   this.dataService.showUserData().subscribe(data => {
    //         console.log(data);
    //       })
    // },2000)
    // const ods$ = interval(2000)
    // ods$.subscribe(()=>{
    //   this.dataService.showUserData().subscribe(data => {
    //     console.log(data);
    //   })
    // })
    // this.id =setInterval(()=>{
    //    this.dataService.showUserData().subscribe(data => {
    //     this.datas.unshift(
    //       { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
    //         numberPlate:data.id,
    //         timeStamp:'12:39PM',
    //         id:'Any'
    //       }
    //     );
    //   //  this.datas = [
    //   //   { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
    //   //   numberPlate:data.todo,
    //   //   timeStamp:'12:39PM',
    //   //   id:'Any'
    //   // }
    //   //  ];
    //   })
    // },2000)
  
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

  ngOnDestroy() {
    clearInterval(this.id);
  }
  stop(){
    this.ngOnDestroy();
  }

  // start() {
  //   this.ngOnInit();
  // }

  start(){
    // console.log(this.showroomName);
    let start = {
      showroomName:'hero',
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
       },this.timmer)
      }
    },(err)=>{
      if(err){
        this.btnName = 'TRY AGAIN'
      }
    })
  }

  // bigImage(image:any){
  //   console.log(image);
  //   this.showImg ='true'
  //   this.imgUrl = image.imageUrl
  //   console.log(this.showImg);
    
  //  }
   hideModle(e:any){
  
    if(e.target.className=='modalBoxContainer'||e.target.className=='modalContainer'){
      this.showImg ='false';
}
 }
//   datas=[
//     { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
//      numberPlate:'KA65 Q7080',
//      timeStamp:'12:39PM',
//      any:'Any'
//    },
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
//    ];
correct(){
  console.log('correct');
}

wrong(){
  console.log('wrong'); 
}
}
