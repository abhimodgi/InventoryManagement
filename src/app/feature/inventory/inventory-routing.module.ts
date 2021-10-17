import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateinventoryComponent } from './component/createinventory/createinventory.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { ListinventoryComponent } from './component/listinventory/listinventory.component';

const routes: Routes = [
  {
    path:'',
    component:InventoryComponent,
    children:[
      {
        path:'list',
        component:ListinventoryComponent
      },
      {
        path:'add',
        component:CreateinventoryComponent
      },
      {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
