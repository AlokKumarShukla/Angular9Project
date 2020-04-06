import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';
import { MyserviceService } from './myservice.service';
import { MycomponentComponent } from './mycomponent/mycomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule
  ],
  providers: [MyserviceService],
  bootstrap: [MycomponentComponent]
})
export class AppModule {
constructor()
{console.log("Hi, This message is from Module");}

 }
