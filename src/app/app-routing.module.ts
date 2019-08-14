import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './comp/contact/contact.component';
import { MainComponent } from './comp/main/main.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
