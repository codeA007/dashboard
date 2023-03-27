import { Component } from '@angular/core';
import { faCameraRetro,faPoll,faList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  page = 1;
  showImg ='false';
  imgUrl = ''
  faCameraRetro = faCameraRetro;
  faPoll = faPoll;
  faList = faList;
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

   hideModle(e:any){
  
      if(e.target.className=='modalBoxContainer'||e.target.className=='modalContainer'){
        this.showImg ='false';
}
   }
  }
