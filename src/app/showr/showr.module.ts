import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowrRoutingModule } from './showr-routing.module';
import { AddShowroomComponent } from './add-showroom/add-showroom.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {HeaderComponent} from '../components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { AppModule } from '../app.module';
import { AdddelarshipComponent } from './adddelarship/adddelarship.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AddShowroomComponent,
    AdddelarshipComponent,
    // HeaderComponent,
  ],
  imports: [
    CommonModule,
    ShowrRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    // AppModule
    //  HeaderComponent
  ],
  // bootstrap: [ShowrComponent]
})
export class ShowrModule { }
