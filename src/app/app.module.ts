import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import {FormsModule} from '@angular/forms';
// import { NgxDaterangepickerMd } from 'daterangepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthGuard } from './auth.guard';
import { SuperadminComponent } from './components/superadmin/superadmin.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { ResultsComponent } from './components/results/results.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { ShowroomsComponent } from './components/showrooms/showrooms.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { FabricjsComponent } from './components/fabricjs/fabricjs.component';
import { AddCameraComponent } from './components/add-camera/add-camera.component';
import { ViewCameraComponent } from './components/view-camera/view-camera.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedcomponentsModule } from './sharedcomponents/sharedcomponents.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ErrorComponent } from './components/error/error.component';
import { ZoomComponent } from './components/zoom/zoom.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
// import { EditImageComponent } from './components/edit-image/edit-image.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    SuperadminComponent,
    HeaderComponent,
    AdminpageComponent,
    ResultsComponent,
    UserpageComponent,
    ShowroomsComponent,
    LoadingComponent,
    AnalyticsComponent,
    FabricjsComponent,
    AddCameraComponent,
    ViewCameraComponent,
    ErrorComponent,
    ZoomComponent,
 
    // EditImageComponent
  ],
  // exports:[
  //   HeaderComponent
  // ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    SharedcomponentsModule,
    NgxImageZoomModule,
    NgxDaterangepickerMd.forRoot({
      applyLabel: 'Okay',
      firstDay: 0
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
