import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Inventory } from '../model/inventory';
@Injectable({
   providedIn: 'root'
 })
export class InventoryService {  
  constructor(private httpClient:HttpClient) {}
  getInventoryAll() {
    return this.httpClient.get<Inventory[]>(environment.baseUrl + environment.inventory,{ observe: 'response' });
  }

  addInventory(inv:any) {
    return this.httpClient.post(environment.baseUrl + environment.inventory,inv,{ observe: 'response' });
  }

  updateInventory(inv:any,id:number){
    return this.httpClient.put(environment.baseUrl + environment.inventory + "/" + id,inv,{ observe: 'response' });
  }

  deleteInventory(id:number){
    return this.httpClient.delete(environment.baseUrl + environment.inventory + "/" + id,{ observe: 'response' });
  }
}
