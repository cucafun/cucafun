import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  imports: [MatButtonModule,
    MatCheckboxModule, 
    MatInputModule,
    MatIconModule,
    MatGridListModule],
  exports: [MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule,
    MatIconModule,
    MatGridListModule]
})
export class MaterializeComponentModules { }