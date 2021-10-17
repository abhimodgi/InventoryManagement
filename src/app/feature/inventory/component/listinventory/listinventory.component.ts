import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InventoryService } from '../../service/inventory.service';
import{Inventory} from './../../model/inventory';
@Component({
  selector: 'app-listinventory',
  templateUrl: './listinventory.component.html',
  styleUrls: ['./listinventory.component.scss']  
})
export class ListinventoryComponent implements OnInit {
  inventoryList:Inventory[] = [];
  clonedProducts: { [s: string]: Inventory; } = {};
  first = 0;
  rows = 10;
  constructor(private messageService:MessageService,private router:Router,private invService:InventoryService) { }

  ngOnInit(): void {
    this.getInventoryData();
  }

  getInventoryData() {
    this.invService.getInventoryAll().subscribe((data:any) => {
      if(data.status == 200){
        this.inventoryList = data.body;
      }      
    },(error:any)=>
    {
     this.messageService.add({severity:'error', summary: 'Error', detail:'Error Occured while processing request'});   
    })
  }

  onRowEditInit(inventory: Inventory) {
    this.clonedProducts[inventory.id] = {...inventory};
}

onRowEditSave(inventory: Inventory) {
    if (inventory.price > 0) {
      var reqJson = {
        "id":inventory.id,      
        "name":inventory.name,
        "description":inventory.description,
        "vendor":inventory.vendor,
        "price":inventory.price
      }
        this.invService.updateInventory(reqJson,inventory.id).subscribe((data) => {
          if(data.status == 200){
            delete this.clonedProducts[inventory.id];
          this.messageService.add({severity:'success', summary: 'Success', detail:'Inventory is updated'});        
          }          
        },(error:any)=>
        {
         this.messageService.add({severity:'error', summary: 'Error', detail:'Error Occured while processing request'});   
        });        
    }
    else {
        this.messageService.add({severity:'error', summary: 'Error', detail:'Inventory Price'});
    }
}

onRowEditCancel(inventory: Inventory, index: number) {
    this.inventoryList[index] = this.clonedProducts[inventory.id];
    delete this.clonedProducts[inventory.id];
}

addInventory(){
  this.router.navigateByUrl("/inventory/add");
}

deleteInventory(inventory:Inventory){
 this.invService.deleteInventory(inventory.id).subscribe((data) => {
   if(data.status == 200 || data.status == 204){
    var index = this.inventoryList.findIndex(x => x.id === inventory.id);
    this.inventoryList = this.inventoryList.slice(0, index).concat( this.inventoryList.slice(index+1) );
    this.messageService.add({severity:'success', summary: 'Success', detail:'Inventory is deleted'});   
   }       
 },(error:any)=>
 {
  this.messageService.add({severity:'error', summary: 'Error', detail:'Error Occured while processing request'});   
 });
}
}
