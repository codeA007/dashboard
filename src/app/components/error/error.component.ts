import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  constructor(){}
  @Input() errorMessage?:String;
  @Input() displayStatus?:String;
  @Output() retryBtn = new EventEmitter();
  id!: NodeJS.Timer;

  // ids = setInterval(()=>{
  //   this.displayStatus = 'false';
  // },6000)
}
