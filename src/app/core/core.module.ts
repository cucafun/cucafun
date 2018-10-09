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
import { LoginComponent, SignUpComponent } from '@app/modules/pages';

@NgModule({
  declarations: [NotFoundComponent, LoginComponent, SignUpComponent],  
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    HttpClientModule
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
