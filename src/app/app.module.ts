import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { CustomerComponent } from './customer/customer.component';
import { PartnerComponent } from './partner/partner.component';

import { CreateService } from './create/create.service';

const appRoutes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'partner', component: PartnerComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'view', component: AppComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    CustomerComponent,
    PartnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [
    CreateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
