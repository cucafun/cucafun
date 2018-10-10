import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent} from '@app/modules/pages';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule{}