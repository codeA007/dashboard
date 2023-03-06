import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';

const routes: Routes = [
  {path:'viewAccount',component:ViewaccountComponent},
  {path:'e',component:EditdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
