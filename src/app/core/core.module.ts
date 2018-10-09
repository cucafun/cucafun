import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from '@app/core/core.routing';
import { NotFoundComponent } from '@app/core/not-found/not-found.component';
import { SharedModule } from '@app/shared/shared.module';
import { AuthenticationService, AuthenticationGuardService } from '@app/core/services';
import { HttpClientModule } from '@angular/common/http';
// Imports hammerjs library necessary for gesture response support components such as mat-slide-toggle, mat-slider, matTooltip reply on hammerjs for gesutres
import 'hammerjs';

@NgModule({
  declarations: [NotFoundComponent],  
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ],  
  providers: [
    AuthenticationService,
    AuthenticationGuardService
  ],
})
export class CoreModule { }
