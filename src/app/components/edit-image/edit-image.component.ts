import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
// import * as fabric from 'fabric';


// import { Component, OnInit, AfterViewInit } from '@angular/core';
import 'fabric';
declare const fabric: any;

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})


export class EditImageComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {}
  @ViewChild('canvas', { static: false })
  canvasRef!: ElementRef;

  ngAfterViewInit() {
    const canvas = new fabric.Canvas(this.canvasRef.nativeElement);
    fabric.Image.fromURL('path/to/image.jpg', (img: any) => {
      canvas.add(img);
      canvas.renderAll();
    });

    const line = new fabric.Line([50, 100, 200, 200], {
      stroke: 'red',
      strokeWidth: 5
    });
    canvas.add(line);
    canvas.renderAll();
  }
}
//   //POLYGON DATAS
//   myCanvas: any;
//   image = new Image();
//   url: string | undefined;
//   isCanvasDrawn: boolean = true;
//   canvas: any;
//   polygon: any;
//   isImageDrawn: boolean = false;
//   isPolygonDrawn: boolean = false;
//   points = [];
//   newPt=[] as any;
//   pointIndex: any;

//   constructor() { }

//   ngOnInit(): void {
//     //POLYGON INIT
//     this.canvas = new fabric.Canvas('canvasID', { fireRightClick: true });

//     this.polygon = new fabric.Polygon(this.points, {
//       left: 0,
//       top: 0,
//       fill: 'rgba(255,0,0,0.1)',
//       strokeWidth: 1,
//       stroke: 'lightgrey',
//       scaleX: 1,
//       scaleY: 1,
//       objectCaching: false,
//       transparentCorners: false,
//       cornerColor: 'blue'
//     });
//     this.canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
//   }

//   ngAfterViewInit(): void {
//     this.canvas.on('mouse:up', (options: { button: number; e: any; }) => {
//       if (options.button === 1) {
//         this.getClickCoords(options.e);
//       }
//     });

//     this.canvas.on('mouse:down', (event: { button: number; }) => {
//       if (event.button === 3) {
//         if (this.points.length < 4) {
//           this.isPolygonDrawn = false;
//         } else {
//           this.makePolygon();
//           this.isPolygonDrawn = true;
//         }
//       }
//     });
//   }

//   selectFile(event: any): void {
//     var canvas = this.canvas;
//     if (event.target.files) {
//       var reader = new FileReader();
//       let file = event.target.files[0];
//       reader.readAsDataURL(file);
//       reader.onload = (event: any) => {
//         this.url = event.target.result;
//         this.canvas.setHeight(720);
//         this.canvas.setWidth(1280);
//         fabric.Image.fromURL(this.url, function (img: { width: number; height: number; }) {
//           canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
//             scaleX: canvas.width / img.width,
//             scaleY: canvas.height / img.height
//           });
//         });
//       };
//       this.isImageDrawn = true;
//     }
//   }

//   getClickCoords(event: any) {
//     if (this.isCanvasDrawn && this.isImageDrawn) {
//       this.newPt = {
//         x: event.layerX,
//         y: event.layerY
//       };
//       this.points.push(this.newPt);
//       this.canvas.add(this.polygon);
//       // if (this.points.length > 3) {
//       //   this.isPolygonDrawn = true;
//       // }
//     }
//   }

//   makePolygon() {
//     this.isImageDrawn = false;
//     console.log(this.points);
//   }

//   copyCoords() {
//     if (this.points.length >= 3) {
//       let polygonStr = 'Coords Array (';
//       let close = ')';
//       let sp = ' ';
//       let com = ', ';
//       for (let i = 0; i < this.points.length - 1; i++) {
//         let tempX = (this.points[i].x / 1280).toFixed(10);
//         let tempY = (this.points[i].y / 720).toFixed(10);
//         tempX = tempX.toString();
//         tempY = tempY.toString();
//         polygonStr = polygonStr.concat(tempX, sp, tempY, com);
//       }
//       let last = this.points[this.points.length - 1];
//       let tempX = (last.x / 1280).toFixed(10);
//       let tempY = (last.y / 720).toFixed(10);
//       tempX = tempX.toString();
//       tempY = tempY.toString();
//       polygonStr = polygonStr.concat(tempX, sp, tempY, close);
//       console.log(polygonStr);

//       //Copying Polygon to clipboard
//       let el = document.createElement('textarea');
//       el.value = polygonStr;
//       document.body.appendChild(el);
//       el.select();
//       document.execCommand('copy');
//       document.body.removeChild(el);
//     }
//   }

//   //POLYGON EDIT
//   public Edit() {
//     const polygonPositionHandler = (dim: any, finalMatrix: any, fabricObject: { points: { [x: string]: {
//       x: number; y: number; 
// }; }; pathOffset: { x: number; y: number; }; canvas: { viewportTransform: any; }; calcTransformMatrix: () => any; }) => {
//       let x =
//         fabricObject.points[this.pointIndex].x - fabricObject.pathOffset.x,
//         y = fabricObject.points[this.pointIndex].y - fabricObject.pathOffset.y;
//       return fabric.util.transformPoint(
//         new fabric.Point(x, y),
//         fabric.util.multiplyTransformMatrices(
//           fabricObject.canvas.viewportTransform,
//           fabricObject.calcTransformMatrix()
//         )
//       );
//     }
//     function anchorWrapper(anchorIndex: number, fn: { (eventData: any, transform: any, x: any, y: any): boolean; (arg0: any, arg1: any, arg2: any, arg3: any): any; }) {
//       return function (eventData: any, transform: { target: any; }, x: any, y: any) {
//         var fabricObject = transform.target,
//           absolutePoint = fabric.util.transformPoint(
//             new fabric.Point(
//               fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x,
//               fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y
//             ),
//             fabricObject.calcTransformMatrix()
//           ),
//           actionPerformed = fn(eventData, transform, x, y),
//           newDim = fabricObject._setPositionDimensions({}),
//           polygonBaseSize = fabricObject._getNonTransformedDimensions(),
//           newX =
//             (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x) /
//             polygonBaseSize.x,
//           newY =
//             (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y) /
//             polygonBaseSize.y;
//         fabricObject.setPositionByOrigin(absolutePoint, newX + 0.5, newY + 0.5);
//         return actionPerformed;
//       };
//     }
//     function actionHandler(eventData: any, transform: { target: any; }, x: any, y: any) {
//       var polygon = transform.target,
//         currentControl = polygon.controls[polygon.__corner],
//         mouseLocalPosition = polygon.toLocalPoint(
//           new fabric.Point(x, y),
//           'center',
//           'center'
//         ),
//         polygonBaseSize = polygon._getNonTransformedDimensions(),
//         size = polygon._getTransformedDimensions(0, 0),
//         finalPointPosition = {
//           x:
//             (mouseLocalPosition.x * polygonBaseSize.x) / size.x +
//             polygon.pathOffset.x,
//           y:
//             (mouseLocalPosition.y * polygonBaseSize.y) / size.y +
//             polygon.pathOffset.y
//         };
//       polygon.points[currentControl.pointIndex] = finalPointPosition;
//       return true;
//     }
//     let poly = this.canvas.getObjects()[0];
//     this.canvas.setActiveObject(poly);
//     poly.edit = !poly.edit;
//     if (poly.edit) {
//       let lastControl = poly.points.length - 1;
//       poly.cornerStyle = 'circle';
//       poly.cornerColor = 'rgba(0,0,255,0.5)';
//       poly.controls = poly.points.reduce(function (acc: { [x: string]: any; }, point: any, index: any | number) {
//         acc['p' + index] = new fabric['Control']({
//           pointIndex: index,
//           positionHandler: polygonPositionHandler,
//           actionHandler: anchorWrapper(
//             index > 0 ? index - 1 : lastControl,
//             actionHandler
//           ),
//           actionName: 'modifyPolygon'
//         });
//         return acc;
//       }, {});
//     }

//     poly.hasBorders = !poly.edit;
//     this.canvas.requestRenderAll();
//   }
// }