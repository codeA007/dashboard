import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomepageComponent} from './components/homepage/homepage.component'
import { AuthGuard } from './auth.guard';
import { SuperadminComponent } from './components/superadmin/superadmin.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { ResultsComponent } from './components/results/results.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { AdminGuard } from './admin.guard';
import { UserGuard } from './user.guard';
import { ShowroomsComponent } from './components/showrooms/showrooms.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { FabricjsComponent } from './components/fabricjs/fabricjs.component';
import { AddCameraComponent } from './components/add-camera/add-camera.component';
import {ViewCameraComponent} from './components/view-camera/view-camera.component';
import { SearchComponent } from './components/search/search.component';
// import { EditImageComponent } from './components/edit-image/edit-image.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:HomepageComponent,canActivate:[AuthGuard]},
  {path:'superAdmin',component:SuperadminComponent},
  // {path:'superAdmin',component:SuperadminComponent,canActivate:[AuthGuard]},
  // {path:'superAdmin',component:SuperadminComponent,canActivate:[]},
  {path:'admin',component:AdminpageComponent, },
  // {path:'admin',component:AdminpageComponent,canActivate:[AdminGuard] },
  {path:'results',component:ResultsComponent},
  {path:'user',component:UserpageComponent ,},
  {path:'showrooms',component:ShowroomsComponent,},
  {path:'analytics',component:AnalyticsComponent,},
  {path:'search',component:SearchComponent,},
  {path:'editImage',component:FabricjsComponent,},
  {path:'addCamera',component:AddCameraComponent,canActivate:[AdminGuard]},
  {path:'viewCamera',component:ViewCameraComponent,canActivate:[AdminGuard] },
  {path:'showroom',
  loadChildren:()=>import('./showr/showr.module').then(mod=>mod.ShowrModule),
  // canActivate:[AuthGuard]
},
{path:'account',
loadChildren:()=>import('./account/account.module').then(mod=>mod.AccountModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
