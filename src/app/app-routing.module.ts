import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './comp/contact/contact.component';
import { MainComponent } from './comp/main/main.component';
import { ShopComponent } from './comp/shop/shop.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: '', component: MainComponent },
  { path: 'shop', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
