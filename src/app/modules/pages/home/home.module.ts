import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@app/modules/pages';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent],
  exports: [],
  providers: []
})
export class HomeModule { }
