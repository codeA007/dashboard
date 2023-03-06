import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, } from '@angular/core';
import { Router,ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import 'fabric';
import{CameraService} from '../../services/camera.service';
declare const fabric: any;
import 'fabric-history';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';
import {DataService} from '../../data.service';
import { faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';

declare const fabricH: any;

@Component({
  selector: 'app-fabricjs',
  templateUrl: './fabricjs.component.html',
  styleUrls: ['./fabricjs.component.css'],
})
export class FabricjsComponent  implements  AfterViewInit,OnInit {
  name = new FormControl('');
  myCanvas: any;
  list:any;
  image = new Image();
  check?:String='';
  color:String='';
  url!: string;
  newName:any;
  faTrash=faTrash;
  isCanvasDrawn: boolean = true;
  canvas: any;
  polygon: any;
  isImageDrawn: boolean = false;
  isPolygonDrawn: boolean = false;
  points:any = [];
  show=false;
  id:any;
  multiPoints: Array<any> = [];
   poly:any;
  errorMessage?:String;
  errorDisplayStatus=false;
  newPt:Object={};
  coordinates!:Array<any>;
   multi3:any
  d:any;
  o:any;
  displayName =false;
  @ViewChild('canRef') canvasRef!:ElementRef;
  // document: any;
  constructor( private router: Router,private route:ActivatedRoute,private dataService:DataService,private cameraService:CameraService) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = params;
    })
  }
  currentRouter = this.router.url;
  ngOnInit(): void {
    this.cameraService.getCoordinates(this.id).subscribe(data => {
      console.log(data.coordinates,"coooo");
      this.errorMessage ='';
      this.errorDisplayStatus = false;
      if(data){
        this.show = false
        this.coordinates = data.coordinates;
        // console.log(this.coordinates,"coo");
        
        // this.canvas.add(new fabric.Text('foo', { 
        //   fontSize:20,
        //   stroke:'rgb(127,255,0)',
        //   left:this.coordinates[0].x, 
        //   top:this.coordinates[0].y - 20,
        //   selectable:false,
        //   backgroundColor:'black'
        //   // fill: 'rgb(127,255,0)',
        // }));
        console.log(this.coordinates);
        // this.canvas.renderAll(); 

        // this.coordinates = [ 
        //   [
        //     {x: 380, y: 165},    
        //     {x: 438, y: 403},          
        //     {x: 932, y: 391}, 
        //   ] ,
        //   [
        //     {x: 380, y: 165},    
        //   {x: 438, y: 403},          
        //   {x: 932, y: 391}, 
        //   {x: 894, y: 128},
        //   {x: 630, y: 37}
        //   ] ,
        //   // {x: 380, y: 165},    
        //   // {x: 438, y: 403},          
        //   // {x: 932, y: 391}, 
        //   // {x: 894, y: 128},
        //   // {x: 630, y: 37}
        // ];
        if(this.coordinates != null) {
       
          this.coordinates.forEach((p)=>{
            // this.points = p;
            this.multiPoints.push(p);
            console.log(p);
             
        this.canvas.add(new fabric.Text(p.name, { 
          fontSize:20,
          stroke:'rgb(127,255,0)',
          left:p.points[0].x, 
          top:p.points[0].y - 20,
          selectable:false,
          backgroundColor:'black'
          // fill: 'rgb(127,255,0)',
        }));
            
          //  this.polygon.points =p;
            // this.canvas = new fabric.Canvas('canvasID', { fireRightClick: true });
          var poly = new fabric.Polygon(p.points, {
              // left: 0,
              // top: 0,
              fill: 'rgba(239, 239,240,0.1)',
              strokeWidth: 2,
              stroke: 'green',
              scaleX: 1,
              scaleY: 1,
              objectCaching: false,
              transparentCorners: false,
              cornerColor: 'blue'
            });
            this.canvas.add(poly);
          })
      
        }
      }
    },(err)=>{
                console.log(err);
               this.show = false;
        if(err){
        this.show = false
      //   this.coordinates = [ 
      //     [
      //       {x: 380, y: 165},    
      //       {x: 438, y: 403},          
      //       {x: 932, y: 391}, 
      //     ] ,
      //     [
      //         {x: 646, y: 97},
      //         {x: 975, y: 66},
      //          {x: 1003, y: 250},
      //           {x: 711, y: 277}
      //     ] ,
      //     [
      //       {x: 751, y: 145},
      //       {x: 1109, y: 32},
      //       {x: 1051, y: 275}
      //     ]

      //     // {x: 380, y: 165},    
      //     // {x: 438, y: 403},          
      //     // {x: 932, y: 391}, 
      //     // {x: 894, y: 128},
      //     // {x: 630, y: 37}
      //   ];
      //   if(this.coordinates != null) {
      //     this.list = this.coordinates;
      //     this.coordinates.forEach((p)=>{
      //       this.multiPoints.push({name:'name',points:p})
      //       // this.multiPoints.push(p);
      //       // this.points = p;
      //     //  this.polygon.points =p;
      //     // this.canvas = new fabric.Canvas('canvasID', { fireRightClick: true });
      //       // this.canvas = new fabric.Canvas('canvasID', { fireRightClick: true });
      //      let poly = new fabric.Polygon(p, {
      //         // left: 0,
      //         // top: 0,
      //         fill: 'rgba(239, 239,240,0.1)',
      //         strokeWidth: 2,
      //         stroke: 'green',
      //         scaleX: 1,
      //         scaleY: 1,
      //         objectCaching: false,
      //         transparentCorners: false,
      //         cornerColor: 'blue'
      //       });
      //       this.canvas.add(poly);
      //       let name =new fabric.Text('name', { 
      //         fontSize:20,
      //         stroke:'rgb(127,255,0)',
      //         left:p[0].x, 
      //         top:p[0].y - 20,
      //         selectable:false,
      //         backgroundColor:'black'
      //         // fill: 'rgb(127,255,0)',
      //       })
      //       this.canvas.add(name);
      //     })
      // console.log(this.multiPoints,"mul");
        // }
        // this.coordinates = data.coordinates;
        console.log(this.coordinates,"coo");
        
        // this.canvas.add(new fabric.Text('foo', { 
        //   fontSize:20,
        //   stroke:'rgb(127,255,0)',
        //   left:this.coordinates[0].x, 
        //   top:this.coordinates[0].y - 20,
        //   selectable:false,
        //   backgroundColor:'black'
        //   // fill: 'rgb(127,255,0)',
        // }));
        console.log(this.coordinates);
        // this.canvas.renderAll(); 

        // this.coordinates = [ 
        //   [
        //     {x: 1269.3018430230595, y: 7.148467529764673}, 
        //     {x: 6.995605620916194, y: 7.148467529764695},
        //   ] ,
        //   // [
        //   //   {x: 1269.3018430230595, y: 7.148467529764673}, 
        //   //   {x: 6.995605620916194, y: 7.148467529764695},
        //   // ] ,
        //   // {x: 380, y: 165},    
        //   // {x: 438, y: 403},          
        //   // {x: 932, y: 391}, 
        //   // {x: 894, y: 128},
        //   // {x: 630, y: 37}
        // ];
      //   if(this.coordinates != null) {
      //     console.log('ifif');
      //     // this.points = this.coordinates;
      //  this.polygon.points = this.coordinates;
      //  this.canvas.add(this.polygon);
      //   }
        // if(this.coordinates != null) {
        //   console.log('yeeee');
          
        //   // this.coordinates.forEach((p)=>{
        //   //   console.log(p,'pppp');
            
        //   //   this.points = p;
        //   //   // this.polygon.points = p;
        //   //   this.canvas.add(p);
        //   // })
        // }
      }
      // this.errorMessage = err.statusText;
      // this.errorDisplayStatus = true;
    })
    //     // // this.ngOnInit();
    //     // this.ngAfterViewInit();
    //     this.canvas = new fabric.Canvas('canvasID', { fireRightClick: true });
    //     this.polygon = new fabric.Polygon(this.points, {
    //       left: 0,
    //       top: 0,
    //       fill: 'rgba(239, 239,240,0.1)',
    //       strokeWidth: 2,
    //       stroke: 'green',
    //       scaleX: 1,
    //       scaleY: 1,
    //       objectCaching: false,
    //       transparentCorners: false,
    //       cornerColor: 'blue'
    //     });
    //     if(this.coordinates != null) {
    //       this.points = this.coordinates;
    //    this.polygon.points = this.coordinates;
    //    this.canvas.add(this.polygon);
    //     }
    //     this.ngAfterViewInit()
    //   }
    //   // this.datas.unshift(
    //   //   { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
    //   //     numberPlate:data.id,
    //   //     timeStamp:'12:39PM',
    //   //     id:'Any'
    //   //   }
    //   // );
    // //  this.datas = [
    // //   { imageUrl:'https://i.pinimg.com/564x/d0/19/df/d019df2153f04c8a0a1dd990e2706091.jpg',
    // //   numberPlate:data.todo,
    // //   timeStamp:'12:39PM',
    // //   id:'Any'
    // // }
    // //  ];
    // })
    // setTimeout(() =>{
    //   this.coordinates = [   
    //     {x: 1269.3018430230595, y: 7.148467529764673}, 
    //     {x: 6.995605620916194, y: 7.148467529764695},
    //     // {x: 380, y: 165},    
    //     // {x: 438, y: 403},          
    //     // {x: 932, y: 391}, 
    //     // {x: 894, y: 128},
    //     // {x: 630, y: 37}
    //   ];
      console.log(123);
    
      // this.canvas.add(this.polygon);
  //     this.coordinates = [   
  //       // {x: 1269.3018430230595, y: 7.148467529764673}, 
  //       // {x: 6.995605620916194, y: 7.148467529764695},
  //       // {x: 380, y: 165},    
  //       // {x: 438, y: 403},          
  //       // {x: 932, y: 391}, 
  //       // {x: 894, y: 128},
  //       // {x: 630, y: 37}
  //       {x: 385, y: 165},  
  // {x: 924, y: 165},
  // {x: 637, y: 379}
  //     ];
    
    this.canvas = new fabric.Canvas('canvasID', { fireRightClick: true });
    this.polygon = new fabric.Polygon(this.points, {
      left: 0,
      top: 0,
      fill: 'rgba(239, 239,240,0.1)',
      strokeWidth: 2,
      stroke: 'green',
      scaleX: 1,
      scaleY: 1,
      objectCaching: false,
      transparentCorners: false,
      cornerColor: 'blue'
    });
    console.log(this.polygon,"1polly");
    
    // console.log("init");
    //POLYGON INIT
   
    this.canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
    if(this.coordinates != null) {
      this.points = this.coordinates;
   this.polygon.points = this.coordinates;
   this.canvas.add(this.polygon);
   
   this.canvas.renderAll(); 

    }
   this.canvas.requestRenderAll(); 
  }

  saveImage() {
    const canvas = document.getElementById('canvasID') as HTMLCanvasElement;
    // console.log();
    
    const imageData = canvas.toDataURL();
    const link = document.createElement('a');
    console.log(imageData);
    
    link.download = 'image.png';
    link.href = imageData;
    console.log(link);
    link.click();
    
}
  ngAfterViewInit(): void {
    // if(this.coordinates!=null){
      // this.polygon.points = this.coordinates;
    //   console.log( this.polygon.points,"if");
      // this.canvas.add(this.polygon);
      
    // }else{
    //   this.polygon.points = [];
    // }
    console.log(this.isCanvasDrawn,this.isPolygonDrawn,this.isImageDrawn,"init 2");

    this.selectFile();
    this.canvas.on('mouse:up', (options: { button: number; e: any; }) => {
      if (options.button === 1) {
        this.o = options.e;
        // console.log(options.e,"any");
        this.getClickCoords(options.e);
      }
      // draw(){
      //  console.log(123);
        
      // }
    });


    // this.canvas.on('mouse:down', (event: { button: number; }) => {
    //   if (event.button === 3) {
    //     if (this.points.length < 1) {
    //       this.isPolygonDrawn = false;
    //     } else {
    //       this.makePolygon();
    //       this.isPolygonDrawn = true;
    //     }
    //   }
    // });
  }
  drawn(){
    if (this.points.length < 1) {
      this.isPolygonDrawn = false;
    } else {
      this.makePolygon();
      this.isPolygonDrawn = true;
    }
  }
  editCo(){
//     if(this.o != null){
// this.getClickCoords(this.o)
//     }
  //   this.points =  [
  //     { x: -20, y: -35 },
  //     { x: 20, y: -35 },
  //     { x: 40, y: 0 },
  //     { x: 20, y: 35 },
  //     { x: -20, y: 35 },
  //     { x: -40, y: 0 },
  //  ]
    this.polygon.points = 
    // new fabric.Polygon(
      [ 
        {x: 380, y: 165},    
        {x: 438, y: 403},          
        {x: 932, y: 391}, 
        {x: 894, y: 128}
      ],
  
      this.points = this.polygon.points;
      // if(this.o ! null){
      //   this.getClickCoords(this.o)
      // }
      // clientX: 637, clientY: 189,
      // { left: 433,
      //   top: 252,
      //   fill: 'rgba(255,0,0,0.1)',
      //   strokeWidth: 2,
      //   stroke: 'green',
      //   scaleX: 1,
      //   scaleY: 1,
      //   objectCaching: false,
      //   transparentCorners: false,
      //   cornerColor: 'blue'}
  //  );
   this.canvas.add(this.polygon)
    // this.ngOnInit();
    // this.ngAfterViewInit();
    // this.polygon.points = [{x:0.3554687500,y:0.1458333333},{x:0.6859375000,y:0.1125000000}];
    // this.polygon.points = [{x: 627, y: 115},{x: 913, y: 88},
    //   {x: 793, y: 157}];
    // this.isPolygonDrawn = ;
    // this.isCanvasDrawn = true;
    // this.isImageDrawn = false;
    console.log(this.polygon);
    
    
  //  this. isImageDrawn = true;
  //   this.isPolygonDrawn = true;
  //   this.isCanvasDrawn = true;

  //   const aCoords = {
  //     tl: new fabric.Point(0, 100),
  //     tr: new fabric.Point(0, 200),
  //     br: new fabric.Point(100, 200),
  //     bl: new fabric.Point(100, 100)
  // }
  
  // fabric.Image.fromURL('https://weeblytutorials.com/wp-content/uploads/2017/04/Weebly-blogs-example.png', (img: { width: any; height: any; set: (arg0: { left: any; top: any; scaleX: number; scaleY: number; angle: any; originX: string; originY: string; }) => void; }) => {
  //   const width = img.width;
  //   const height = img.height;
  //   img.set({
  //     left: aCoords.tl.lerp(aCoords.br).x,
  //     top: aCoords.tl.lerp(aCoords.br).y,
  //     scaleX: (aCoords.tl.distanceFrom(aCoords.tr)) / width,
  //     scaleY: (aCoords.tl.distanceFrom(aCoords.bl)) / height,
  //     angle: fabric.util.radiansToDegrees(Math.atan2(aCoords.tr.y - aCoords.tl.y, aCoords.tr.x - aCoords.tl.x)),
  //     originX: 'center',
  //     originY: 'center',
  //   })
  //   this.canvas.add(img);
  // });
  }
  reset(){
    // this.polygon.points = [];
    // this.canvas.add(this.polygon)
    // console.log( this.);
    
    window.location.reload();
    // this.canvas.undo();
 
  //  var canvas = this.canvas;
  //  fabric.Image.fromURL('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', function(img:any) {
  //   canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
  //     scaleX: canvas.width / img.width,
  //     scaleY: canvas.height / img.height
  //   });
  // }.bind(this),{
  //   crossOrigin: 'anonymous'
  // });
  // this.polygon.points = [];
  // this.points = [];
  // this.ngOnInit();
  // this.ngAfterViewInit();
  // this.isCanvasDrawn= false;
  // this.isImageDrawn = true;
  // this.isPolygonDrawn = false;
  // this.canvas.add(this.polygon)
  // console.log(this.points,"reset")
  // console.log(this.isCanvasDrawn,this.isPolygonDrawn,this.isImageDrawn,"reset");

  // console.log(this.isCanvasDrawn,this.isPolygonDrawn,this.isImageDrawn,"init");
  // this.ngOnInit()
  

  
  // this.canvas.remove(this.polygon)
 
  // this.newPt = {}
  // this.isCanvasDrawn = true;
  // this.isImageDrawn = false;
  // this.isPolygonDrawn= false;

// fabric.clear();
  }
  selectFile() {
    var canvas = this.canvas;
    // if (event.target.files) {
      // var reader = new FileReader();
      // let file = event.target.files[0];
      // reader.readAsDataURL(file);
      // reader.onload = (event: any) => {
        // this.url ='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
        this.canvas.setHeight(500);
        this.canvas.setWidth(1280);
        fabric.Image.fromURL('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', function(img:any) {
          canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height
          });
        }.bind(this),{
          crossOrigin: 'anonymous'
        });
      // };
      this.isImageDrawn = true;
    // }
  }

  getClickCoords(event: any) {
   
    if (this.isCanvasDrawn && this.isImageDrawn) {
      console.log(event,"event....");
      
      this.points.push(this.newPt = {
        x: event.layerX,
        y: event.layerY
      });

      
      if(this.coordinates != null){
        console.log(this.newPt,"newewewe");
        this.polygon.points.push(this.newPt);
        this.polygon.points.splice(-1);
      }
   
      // console.log(this.points,"drawn")
      this.canvas.add(this.polygon);
      
      this.isPolygonDrawn = false;
      // console.log(this.polygon,"pligon")
      // if (this.points.length > 2) {
      //   this.isPolygonDrawn = true;
      // }
    }
    console.log(this.isCanvasDrawn,this.isPolygonDrawn,this.isImageDrawn,"drrawn");

  }

  makePolygon() {
    this.isImageDrawn = false;
    // console.log(this.points);
  }

  copyCoords() {
    console.log(this.points);
    
    // if (this.points.length >= 3) {
      let polygonStr = [];
      // let close = ')';
      // let sp = ' ';
      // let com = ', ';
      console.log();
      
      for (let i = 0; i < this.points.length - 1; i++) {
        let tempX = (this.points[i].x / 1280).toFixed(10);
        let tempY = (this.points[i].y / 720).toFixed(10);
        polygonStr.push(tempX);
        polygonStr.push(tempY);
        // tempX = tempX.toString();
        // tempY = tempY.toString();
        // polygonStr = polygonStr.concat(tempX, sp, tempY, com);
        this.d=polygonStr;
      }
      let last = this.points[this.points.length - 1];
     
      let tempX = (last.x / 1280).toFixed(10);
      let tempY = (last.y / 720).toFixed(10);
      polygonStr.push(tempX);
      polygonStr.push(tempY);
      // tempX = tempX.toString();
      // tempY = tempY.toString();
      // polygonStr = polygonStr.concat(tempX, sp, tempY, close);
      console.log(polygonStr);

      //Copying Polygon to clipboard
      // let el = document.createElement('textarea');
      // el.value = polygonStr;
      // document.body.appendChild(el);
      // el.select();
      // document.execCommand('copy');
      // document.body.removeChild(el);
    // }
  }

  //POLYGON EDIT
  public Edit() {
    console.log('edit');
    if (this.points.length < 1) {
      this.isPolygonDrawn = false;
    } else {
      this.makePolygon();
      this.isPolygonDrawn = true;
    }
    
    function polygonPositionHandler(this: {
        pointIndex: any; positionHandler: (dim: any, finalMatrix: any, fabricObject: {
          points: {
            [x: string]: {
              // // import { Object } from 'fabric/fabric-impl';
              // // import { Object } from 'fabric/fabric-impl';
              y: number;
            };
          }; pathOffset: {
            x: number; y: number;
          }; canvas: {
            viewportTransform: any;
          }; calcTransformMatrix: () => any;
        }) => any; actionHandler: (eventData: any, transform: any, x: any, y: any) => any; actionName: string;
      }, dim: any, finalMatrix: any, fabricObject: { points: { [x: string]: {
        x: number; y: number; 
}; }; pathOffset: { x: number; y: number; }; canvas: { viewportTransform: any; }; calcTransformMatrix: () => any; }) {
      let x =
          fabricObject.points[this.pointIndex].x - fabricObject.pathOffset.x,
        y = fabricObject.points[this.pointIndex].y - fabricObject.pathOffset.y;
      return fabric.util.transformPoint(
        new fabric.Point(x, y),
        fabric.util.multiplyTransformMatrices(
          fabricObject.canvas.viewportTransform,
          fabricObject.calcTransformMatrix()
        )
      );
    }
    function anchorWrapper(anchorIndex: number, fn: { (eventData: any, transform: any, x: any, y: any): boolean; (arg0: any, arg1: any, arg2: any, arg3: any): any; }) {
      return function(eventData:any, transform:any, x:any, y:any) {
        var fabricObject = transform.target,
          absolutePoint = fabric.util.transformPoint(
            new fabric.Point(
              fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x,
              fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y
            ),
            fabricObject.calcTransformMatrix()
          ),
          actionPerformed = fn(eventData, transform, x, y),
          newDim = fabricObject._setPositionDimensions({}),
          polygonBaseSize = fabricObject._getNonTransformedDimensions(),
          newX =
            (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x) /
            polygonBaseSize.x,
          newY =
            (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y) /
            polygonBaseSize.y;
        fabricObject.setPositionByOrigin(absolutePoint, newX + 0.5, newY + 0.5);
        return actionPerformed;
      };
    }
    function actionHandler(eventData:any, transform:any, x:any, y:any) {
      var polygon = transform.target,
        currentControl = polygon.controls[polygon.__corner],
        mouseLocalPosition = polygon.toLocalPoint(
          new fabric.Point(x, y),
          'center',
          'center'
        ),
        polygonBaseSize = polygon._getNonTransformedDimensions(),
        size = polygon._getTransformedDimensions(0, 0),
        finalPointPosition = {
          x:
            (mouseLocalPosition.x * polygonBaseSize.x) / size.x +
            polygon.pathOffset.x,
          y:
            (mouseLocalPosition.y * polygonBaseSize.y) / size.y +
            polygon.pathOffset.y
        };
      polygon.points[currentControl.pointIndex] = finalPointPosition;
      return true;
    }
    let poly = this.canvas.getObjects()[2];
    this.canvas.setActiveObject(poly);
    poly.edit = !poly.edit;
    poly.edit = true;
    console.log(poly.points,"poly");
    console.log(this.canvas.getObjects()[2],"loloklol")
    
    if (poly.edit) {
      let lastControl = poly.points.length - 1;
      console.log(lastControl);
      
      poly.cornerStyle = 'circle';
      poly.cornerColor = 'rgba(0,0,255,0.5)';
      poly.controls = poly.points.reduce(function(acc:any, point:any, index:any) {
        acc['p' + index] = new fabric['Control']({
          pointIndex: index,
          positionHandler: polygonPositionHandler,
          actionHandler: anchorWrapper(
            index > 0 ? index - 1 : lastControl,
            actionHandler
          ),
          actionName: 'modifyPolygon'
        });
        return acc;
      }, {});
    }

    poly.hasBorders = !poly.edit;
    this.canvas.requestRenderAll();
    this.points = this.polygon.points;
    console.log(this.polygon.points,"pppp");
  }
  // @ViewChild('canvas', {static: false}) canvasRef: ElementRef | any;
  // private canvas!: fabric.Canvas;
  // private drawing = false;
  // private line:any;

  // ngAfterViewInit() {
  //   this.canvas = new fabric.Canvas(this.canvasRef.nativeElement);
  //   fabric.Image.fromURL('https://media.wired.co.uk/photos/606d9a3ba876dd2203a639aa/1:1/w_2000,h_2000,c_limit/wired-uk-google-watching.jpg', (img:any) => {
  //     this.canvas.add(img);
  //     this.canvas.renderAll();
  //   });
  // }

  // startDrawing(event:any) {
  //   console.log(123);
    
  //   this.drawing = true;
  //   const pointer = this.canvas.getPointer(event.clientX, event.clientY);
  //   this.line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
  //     stroke: 'red',
  //     strokeWidth: 5
  //   });
  //   this.canvas.add(this.line);
  // }

  // drawLine(event:any) {
  //   console.log(123);
    
  //   // if (!this.drawing) {
  //   //   return;
  //   // }
  //   const pointer = this.canvas.getPointer(event.clientX, event.clientY);
  //   this.line.set({ x2: pointer.x, y2: pointer.y });
  //   this.canvas.renderAll();
  // }

  // stopDrawing() {
  //   console.log(134);
    
  //   this.drawing = false;
  //   this.line = null;
  // }
  submit(){
    this.displayName = true;
   let  data={
    id:this.id.id,
      coordinates:this.points
   }
   console.log(data);
   
   this.cameraService.geoFencing(data).subscribe((data)=>{
    console.log(data);
    this.color = 'green';
    this.check = data.result;
    setTimeout(()=>{
      this.color = '';
      this.check = ''
    },1000)
   },(err)=>{
    if(err){
      this.color = 'red';
      this.check = err.message;
      console.log(err);
      
      setTimeout(()=>{
        this.color = '';
        this.check = ''
      },6000)
    }
   })
  }
  retry(){
    // this.ngOnDestroy()
    window.location.reload();
  }

  addName(){
console.log(this.canvas.getObjects()[0]);

// this.canvas.getObjects()[0].clear();


// this.canvas.loadFromJSON(json, this.canvas.renderAll.bind(this.canvas));
    this.canvas.add(new fabric.Text('foo', { 
      fontSize:20,
      stroke:'rgb(127,255,0)',
      left:this.points[0].x, 
      top:this.points[0].y - 20,
      selectable:false,
      backgroundColor:'black'
      // fill: 'rgb(127,255,0)',
    }));
  }

  nameBtn(){
    console.log(this.name.value);
    this.newName = this.name.value;
    this.displayName = false;
    this.polygon =null;
    // console.log(this.polygon);
    console.log(this.points);
  if (this.points.length > 0){
    this.multiPoints.push( {
      name:this.newName,
      points:this.points
    })
    // this.multiPoints.push({[...this.points])
  } 
  this.canvas.add(new fabric.Text(this.newName, { 
    fontSize:20,
    stroke:'rgb(127,255,0)',
    left:this.points[0].x, 
    top:this.points[0].y - 20,
    selectable:false,
    backgroundColor:'black'
    // fill: 'rgb(127,255,0)',
  }));
this.points = []; 
this.polygon = new fabric.Polygon(this.points, {
  left: 0,
  top: 0,
  fill: 'rgba(239, 239,240,0.1)',
  strokeWidth: 2,
  stroke: 'green',
  scaleX: 1,
  scaleY: 1,
  objectCaching: false,
  transparentCorners: false,
  cornerColor: 'blue'
});
this.canvas.add(this.polygon);
console.log(this.multiPoints);
// console.log(this.polygon,"polly");
let  data={
  id:this.id.id,
    coordinates:this.multiPoints
 }
 console.log(data);
 
 this.cameraService.geoFencing(data).subscribe((data)=>{
  console.log(data);
  this.color = 'green';
  this.check = data.result;
  setTimeout(()=>{
    this.color = '';
    this.check = ''
  },1000)
 },(err)=>{
  if(err){
    this.color = 'red';
    this.check = err.message;
    console.log(err);
    
    setTimeout(()=>{
      this.color = '';
      this.check = ''
    },6000)
  }
 })
  }
   addNew(){
    this.displayName = true;
  //   this.polygon =null;
  //   // console.log(this.polygon);
  //   console.log(this.points);
  // if (this.points.length > 0){
  //   this.multiPoints.push( {
  //     name:'name',
  //     points:this.points
  //   })
  //   // this.multiPoints.push({[...this.points])
  // }
  // this.canvas.add(new fabric.Text('hello', { 
  //         fontSize:20,
  //         stroke:'rgb(127,255,0)',
  //         left:this.points[0].x, 
  //         top:this.points[0].y - 20,
  //         selectable:false,
  //         backgroundColor:'black'
  //         // fill: 'rgb(127,255,0)',
  //       }));
  //   this.points = [];
  //   console.log(this.points)
  //   // this.multiPoints = this.points.map((e:any)=>{
  //   //  let arr=  this.multiPoints.push([e])
  //   //   console.log(arr);
  //   // })
  //   // this.multiPoints.push([this.points])
    
   
  //   // this.polygon.points =null;
  //   // console.log(this.polygon.points);
    
  //   this.polygon = new fabric.Polygon(this.points, {
  //     left: 0,
  //     top: 0,
  //     fill: 'rgba(239, 239,240,0.1)',
  //     strokeWidth: 2,
  //     stroke: 'green',
  //     scaleX: 1,
  //     scaleY: 1,
  //     objectCaching: false,
  //     transparentCorners: false,
  //     cornerColor: 'blue'
  //   });
  //   this.canvas.add(this.polygon);
  //   console.log(this.multiPoints);
  //   console.log(this.polygon,"polly");
    
    
  }
  delete(){
    console.log( );
    this.canvas.getObjects().pop()
  // this.ngAfterViewInit()
  // this.ngOnInit()
    // this.polygon =null;
    // this.coordinates = [ 
    //   // [
    //   //   {x: 380, y: 165},    
    //   //   {x: 438, y: 403},          
    //   //   {x: 932, y: 391}, 
    //   // ] ,
    //   [
    //     {x: 380, y: 165},    
    //   {x: 438, y: 403},          
    //   {x: 932, y: 391}, 
    //   {x: 894, y: 128},
    //   {x: 630, y: 37}
    //   ] ,
    //   // {x: 380, y: 165},    
    //   // {x: 438, y: 403},          
    //   // {x: 932, y: 391}, 
    //   // {x: 894, y: 128},
    //   // {x: 630, y: 37}
    // ];
    // // if(this.coordinates != null) {
    //   this.multiPoints = this.coordinates;
    //   this.coordinates.forEach((p)=>{
    //     // this.points = p;
    //   //  this.polygon.points =p;
    //     // this.canvas = new fabric.Canvas('canvasID', { fireRightClick: true });
    //   var  polygon = new fabric.Polygon(p, {
    //       left: 0,
    //       top: 0,
    //       fill: 'rgba(239, 239,240,0.1)',
    //       strokeWidth: 2,
    //       stroke: 'green',
    //       scaleX: 1,
    //       scaleY: 1,
    //       objectCaching: false,
    //       transparentCorners: false,
    //       cornerColor: 'blue'
    //     });
    //     this.canvas.add(polygon);
    //   })
  
    // // }
  }

  deleteROI(data:any){
    console.log(data);
    this.multiPoints.map((p)=>{
      if(data.name==p.name){
       let index = this.multiPoints.indexOf(p);
       this.multiPoints.splice(index, 1);
       console.log(this.multiPoints);
      }
    })
    let datas ={
      id:this.id.id,
      coordinates:this.multiPoints
    }
    this.cameraService.geoFencing(datas).subscribe((data)=>{
      console.log(data);
      this.color = 'green';
      this.check = data.result;
      setTimeout(()=>{
        this.color = '';
        this.check = ''
      },1000)
      window.location.reload()
     },(err)=>{
      if(err){
        this.color = 'red';
        this.check = err.message;
        console.log(err);
        
        setTimeout(()=>{
          this.color = '';
          this.check = ''
        },6000)
      }
     })
  }
}

function draw() {
  throw new Error('Function not implemented.');
}

