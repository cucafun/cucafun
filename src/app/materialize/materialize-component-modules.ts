import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  imports: [MatButtonModule,
    MatCheckboxModule, 
    MatInputModule,
    MatIconModule,],
  exports: [MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule,
    MatIconModule,]
})
export class MaterializeComponentModules { }