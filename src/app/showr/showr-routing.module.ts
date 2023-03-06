import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShowroomComponent } from './add-showroom/add-showroom.component';
import { AdddelarshipComponent } from './adddelarship/adddelarship.component';

const routes: Routes = [
  {path:'addShowroom', component:AddShowroomComponent},
  {path:'addDelerShip', component:AdddelarshipComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowrRoutingModule { }
