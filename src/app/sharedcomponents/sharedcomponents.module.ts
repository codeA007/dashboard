import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
   NavComponent
  ],
  exports:[
   NavComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedcomponentsModule { }
