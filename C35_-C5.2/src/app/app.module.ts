import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoformsComponent } from './foforms/foforms.component';
import { SalidadataComponentexport } from './salidadata/salidadata.component';

@NgModule({
  declarations: [
    AppComponent,
    FoformsComponent,
    SalidadataComponentexport
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
