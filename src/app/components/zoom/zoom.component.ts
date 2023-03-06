import { Component,Input,OnInit } from '@angular/core';

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
}
imageUrl!: string;

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
// console.log();

  this.scaleRange = magnification;
}
mouseMove(event: { x: number; y: number; }) {
  
  this.xValue = event.x;
  this.yValue = event.y;
  
}
}
