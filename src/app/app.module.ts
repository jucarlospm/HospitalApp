import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PatientsModule } from './patients/patients.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PatientsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
