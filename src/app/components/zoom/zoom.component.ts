import { Component,Input,OnInit } from '@angular/core';
import * as Options from '../../../assets/config.json';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements OnInit {
  @Input() imgUrl!:string;
// @Input() showImg?:string;
ngOnInit() {
  console.log(123);
    
  console.log(this.imgUrl);
    
}
hideModle(){
  // this.showImg = 'false';
  // console.log(this.showImg);
  console.log(this.imgUrl);
  
}
imageUrl!: string;

// noPlateip=`http://${(Options as any).default.ip}:${(Options as any).default.port}/	getNumberplate/`;
scaleRange!: number;
xValue!: number;
yValue!: number;
myThumbnail=this.imgUrl||'';
myFullresImage=this.imgUrl||'';


// myThumbnail2="https://picsum.photos/id/944/900/500";
// myFullresImage2="https://picsum.photos/id/944/900/500";

// myThumbnail3="https://picsum.photos/id/944/900/500";
// myFullresImage3="https://picsum.photos/id/944/900/500"  ;
valueChanged(value: number) {
  if (value === 1) {
    this.scaleRange = 1;
  } else {
    this.scaleRange = value;
  }
}

scroll(magnification: number) {
console.log(this.imageUrl);

  this.scaleRange = magnification;
}
mouseMove(event: { x: number; y: number; }) {
  
  this.xValue = event.x;
  this.yValue = event.y;
  
}
}
