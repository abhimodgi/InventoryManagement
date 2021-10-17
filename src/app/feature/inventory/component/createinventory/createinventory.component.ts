import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink} from '@angular/router';
import { MessageService } from 'primeng/api';
import { InventoryService } from '../../service/inventory.service';
@Component({
  selector: 'app-createinventory',
  templateUrl: './createinventory.component.html',
  styleUrls: ['./createinventory.component.scss']
})
export class CreateinventoryComponent implements OnInit {
  inventoryForm: FormGroup;
  constructor(private router:Router,private fb:FormBuilder,private invservice:InventoryService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.inventoryForm =   this.fb.group({
      invName: new FormControl('', Validators.required),
      invDesc: new FormControl('',Validators.required),
      invVen: new FormControl('',Validators.required),
      invPrice: new FormControl('',Validators.required)      
    });    
  }

  addInventory() {
    var reqJson = {      
      "name":this.inventoryForm.controls["invName"].value,
      "description":this.inventoryForm.controls["invDesc"].value,
      "vendor":this.inventoryForm.controls["invVen"].value,
      "price":this.inventoryForm.controls["invPrice"].value
    }
    this.invservice.addInventory(reqJson).subscribe((data) => {   
      if(data.status == 200 || data.status == 201){
        this.messageService.add({severity:'success', summary: 'Success', detail:'Inventory added successfully'});
        this.router.navigateByUrl("/inventory/list");
      }      
    },(error:any)=>
    {
     this.messageService.add({severity:'error', summary: 'Error', detail:'Error Occured while processing request'});   
    });
  }

}
