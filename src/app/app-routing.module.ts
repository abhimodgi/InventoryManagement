import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './core/component/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'inventory',
    loadChildren:() =>
    import('./feature/inventory/inventory.module').then(m => m.InventoryModule)
  },
  {
    path:'',
    redirectTo:'inventory',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {   
}
