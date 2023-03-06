import { Component,OnInit,OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import {DataService} from '../../data.service'

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  id!: NodeJS.Timer;
  datas:Array<any>=[];
  page = 1;
  totalRecords:any = this.datas.length;
  showImg?: string;
  imgUrl: any;
  constructor(private dataService: DataService){}

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
    this.id =setInterval(()=>{
       this.dataService.showUserData().subscribe(data => {
        this.datas.unshift(
          { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
            numberPlate:data.id,
            timeStamp:'12:39PM',
            id:'Any'
          }
        );
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

  ngOnDestroy() {
    clearInterval(this.id);
  }
  stop(){
    this.ngOnDestroy();
  }

  start() {
    this.ngOnInit();
  }

  bigImage(image:any){
    console.log(image);
    this.showImg ='true'
    this.imgUrl = image.imageUrl
    console.log(this.showImg);
    
   }
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
