import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@app/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeComponentModules } from '@app/materialize';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterializeComponentModules
  ],
  declarations: [HeaderComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterializeComponentModules
  ]
})
export class SharedModule { }
