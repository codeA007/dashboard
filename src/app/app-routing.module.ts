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
import { MailComponent } from './components/mail/mail.component';
// import { EditImageComponent } from './components/edit-image/edit-image.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:HomepageComponent,canActivate:[AuthGuard]},
  {path:'superAdmin',component:SuperadminComponent,canActivate:[AuthGuard]},
  // {path:'superAdmin',component:SuperadminComponent,canActivate:[AuthGuard]},
  // {path:'superAdmin',component:SuperadminComponent,canActivate:[]},
  // {path:'admin',component:AdminpageComponent, },
  {path:'admin',component:AdminpageComponent, },
  {path:'showrooms',component:ShowroomsComponent,canActivate:[AuthGuard]},
  {path:'analytics',component:AnalyticsComponent,},
  // {path:'admin/results',component:ResultsComponent},
  {path:'admin/results',component:ResultsComponent,canActivate:[AdminGuard]},
  {path:'admin/search',component:SearchComponent,canActivate:[AdminGuard] },
  {path:'admin/addCamera',component:AddCameraComponent,canActivate:[AdminGuard]},
  {path:'admin/viewCamera',component:ViewCameraComponent,canActivate:[AdminGuard] },
  {path:'admin/mail',component:MailComponent,canActivate:[AdminGuard] },
  {path:'user',component:UserpageComponent ,canActivate:[UserGuard]},
  {path:'user/viewCamera',component:ViewCameraComponent,canActivate:[UserGuard] },

  {path:'user/search',component:SearchComponent,canActivate:[UserGuard] },
  {path:'user/results',component:ResultsComponent,canActivate:[UserGuard] },
  // {path:'user/search',component:ViewCameraComponent,canActivate:[UserGuard] },
  {path:'editImage',component:FabricjsComponent,},
  // {path:'addCamera',component:AddCameraComponent},
  {path:'showroom',
  loadChildren:()=>import('./showr/showr.module').then(mod=>mod.ShowrModule),
  canActivate:[AuthGuard]
},
{path:'account',
loadChildren:()=>import('./account/account.module').then(mod=>mod.AccountModule),
canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
