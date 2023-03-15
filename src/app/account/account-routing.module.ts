import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';

const routes: Routes = [
  {path:'viewAccount',component:ViewaccountComponent},
  {path:'e',component:EditdetailsComponent},
  {path:'addUser',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
