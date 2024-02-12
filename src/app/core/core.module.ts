import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { /*HTTP_INTERCEPTORS,*/ HttpClientModule } from '@angular/common/http';
/*import { JwtInterceptor } from '@auth0/angular-jwt';*/

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],/*,
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]*/
  providers:[
    AuthGuard,
    AuthService
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import it in the AppModule only.`);
    }
  }
}
