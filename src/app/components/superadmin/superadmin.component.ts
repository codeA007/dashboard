import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import {DataService} from '../../data.service';
import { faArrowAltCircleRight,faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';
import * as Options from '../../../assets/config.json';
@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {
  name:any;
  id:any;
  editBtn:boolean=true;
  show:boolean=false;
  index?:any;
  faArrow = faArrowAltCircleRight;
  faArrowLeft = faArrowAltCircleLeft;
  displayNextBtn = true;
  displayPreBtn = true;
  editNo =  new FormGroup({
    number:new FormControl('')
  })
  constructor(private router: Router,private route:ActivatedRoute,private dataService:DataService) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    })
  }
  ngOnInit() {
    console.log( (Options as any).default.superAdminEdit)
    this.editBtn = (Options as any).default.superAdminEdit;
    // console.log((Options as any).default.adminEdit);
    // console.log();
  }
  displayStatus:boolean = false;
  numberPlate:string ='';
   datas=[
   {id:'1',
     imageUrl:'https://gomechanic.in/blog/wp-content/uploads/2019/05/indiapl8.jpg',
    numberPlate:'KA65 Q7080',
    timeStamp:'12:39PM',
    any:'Any'
  },
{ id:'2',
  imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
  numberPlate:'KA65 Q7081',
  timeStamp:'12:39PM',
  any:'Any'
},
{ id:'3',
  imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
numberPlate:'KA65 Q7082',
timeStamp:'12:39PM',
any:'Any'
},];
edit(image: any){
  console.log(image);
  this.displayStatus = true;
  this.numberPlate = image.numberPlate;
  this.id = image.id;
  this.datas.forEach((data,index)=>{
    if(data.id == this.id){
      this.index = index;
      // console.log(this.index,"index");
      
      let newIn = this.index++;
      let prevIn = this.index--;
      prevIn = prevIn-1;
      console.log(prevIn);
      
      if(newIn === this.datas.length-1){
        this.displayNextBtn = false;
      }
      else{
        this.displayNextBtn = true;
      }
      if(prevIn === 0){
        this.displayPreBtn =false;
      }
      else{
        this.displayPreBtn =true;
      }
    }
  })
}
done(){
  // setTimeout(()=>{
    this.displayStatus = false;
    console.log(this.editNo.value);
    let no = this.editNo.value.number
    this.datas.forEach((data,index)=>{
      if(data.id == this.id){
        data.numberPlate = this.editNo.value.number ||''
      }
    })
  // },2000)
}
next(){
  let len = this.datas.length;
  this.index = this.index +1;
  // let prevIn = this.index--;
  // prevIn = prevIn-1;
  if(len === this.index+1){
    this.displayNextBtn = false;
  }
  else if(this.index != 0){
    this.displayPreBtn = true;
  }
  else{
    this.displayNextBtn = true;
  }

  console.log(this.index,"next");
  console.log(this.index,"prev");
  
  // if(prevIn === 0){
  //   this.displayPreBtn =false;
  // }
  // else{
  //   this.displayPreBtn =true;
  // }
  console.log(this.index);
  this.id =this.datas[this.index].id;
  // const nextData = this.datas[newIndex];
  this.numberPlate = this.datas[this.index].numberPlate;
  console.log(this.numberPlate); 
}
previous(){
  this.index = this.index -1;
  this.id =this.datas[this.index].id;
  this.numberPlate = this.datas[this.index].numberPlate;
  //  let prevIn = this.index--;
  // prevIn = prevIn-1;
   if(this.index === 0){
    this.displayPreBtn =false;
  }
  else if(this.index != 0){
    this.displayNextBtn = true
  }
  else{
    this.displayPreBtn =true;
  }
}
hide(e:any){
//   if(e.target.className=='modalBoxContainer'||e.target.className=='modalContainer'){
//     this.displayStatus =false;
// }
}
}


