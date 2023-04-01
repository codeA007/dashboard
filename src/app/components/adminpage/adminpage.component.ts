import { Component,OnInit } from '@angular/core';
import { faCameraRetro,faPoll,faList,faSearch} from '@fortawesome/free-solid-svg-icons';
import { ShowroomService } from '../../services/showroom.service';
import {DataService} from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  constructor(private showroomService:ShowroomService,private dataService: DataService){}
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
  showroomName:String='Select ShowRoomName';
  datas=[
    { imageUrl:'https://c8.alamy.com/comp/2J3TRG8/mumbai-india-april-08-2022-the-bharat-series-number-plates-introduced-by-the-india-ministry-of-road-transport-and-highways-to-make-the-mobility-of-2J3TRG8.jpg',
    numberPlate:'ka65 Q7080',
    timeStamp:'12:39PM',
    any:'Any'
  },
  { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
  numberPlate:'ka65 Q7080',
  timeStamp:'12:39PM',
  any:'Any'
},
{ imageUrl:'https://c8.alamy.com/comp/2J3TRG8/mumbai-india-april-08-2022-the-bharat-series-number-plates-introduced-by-the-india-ministry-of-road-transport-and-highways-to-make-the-mobility-of-2J3TRG8.jpg',
numberPlate:'ka65 Q7080',
timeStamp:'12:39PM',
any:'Any'
},
{ imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'ka65 Q7080',
timeStamp:'12:39PM',
any:'Any'
},
{ imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'ka65 Q7080',
timeStamp:'12:39PM',
any:'Any'
},  { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'ka65 Q7080',
timeStamp:'12:39PM',
any:'Any'
},
  { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
  numberPlate:'KA65 Q7081',
  timeStamp:'12:39PM',
  any:'Any'
},
{ imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'KA65 Q7082',
timeStamp:'12:39PM',
any:'Any'
},
{ imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'ka65 Q7080',
timeStamp:'12:39PM',
any:'Any'
},
{ imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'ka65 Q7080',
timeStamp:'12:39PM',
any:'Any'
},
{ imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'ka65 Q7080',
timeStamp:'12:39PM',
any:'Any'
},
{ imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'ka65 Q7080',
timeStamp:'12:39PM',
any:'Any'
},
{ imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'ka65 Q7080',
timeStamp:'12:39PM',
any:'Any'
},  { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'ka65 Q7080',
timeStamp:'12:39PM',
any:'Any'
},
{ imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'KA65 Q7081',
timeStamp:'12:39PM',
any:'Any'
},
{ imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'KA65 Q7082',
timeStamp:'12:39PM',
any:'Any'
},
    { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
     numberPlate:'ka65 Q7080',
     timeStamp:'12:39PM',
     any:'Any'
   },
   { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
   numberPlate:'ka65 Q7080',
   timeStamp:'12:39PM',
   any:'Any'
 },
 { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
 numberPlate:'ka65 Q7080',
 timeStamp:'12:39PM',
 any:'Any'
},
{ imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'ka65 Q7080',
timeStamp:'12:39PM',
any:'Any'
},
{ imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'ka65 Q7080',
timeStamp:'12:39PM',
any:'Any'
},  { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'ka65 Q7080',
timeStamp:'12:39PM',
any:'Any'
},
   { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
   numberPlate:'KA65 Q7081',
   timeStamp:'12:39PM',
   any:'Any'
 },
 { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
 numberPlate:'KA65 Q7082',
 timeStamp:'12:39PM',
 any:'Any'
 },
   ];
   totalRecords:any = this.datas.length;
   pageChange(){

   }
   bigImage(image:any){
    console.log(image);
    this.showImg ='true'
    this.imgUrl = image.imageUrl
    console.log(this.showImg);
    
   }
   showroom(name:any){
    this.showroomName = name;
  }

  start(){
    console.log(this.showroomName);
    let start = {
      showroomName:this.showroomName,
      startANPR:true
    }
    this.showroomService.startANPR(start).subscribe((data)=>{
      console.log(data);
      if(data.result == 'STARTED'){
        this.id =setInterval(()=>{
          this.dataService.showUserData().subscribe(data => {
            console.log(data);
            
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
  }
