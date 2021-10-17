import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListinventoryComponent } from './component/listinventory/listinventory.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './component/inventory/inventory.component';
import {SharedModule} from './../../shared/shared.module';
import { CreateinventoryComponent } from './component/createinventory/createinventory.component'
import { InventoryService } from './service/inventory.service';

@NgModule({
  declarations: [
    ListinventoryComponent,
    InventoryComponent,
    CreateinventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule    
  ],
  providers:[InventoryService]
})
export class InventoryModule { }
