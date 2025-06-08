import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Modulo1Component } from './components/modulo1/modulo1.component';
import { Modulo2Component } from './components/modulo2/modulo2.component';
import { Modulo3Component } from './components/modulo3/modulo3.component';
import { Modulo4Component } from './components/modulo4/modulo4.component';
import { CreditosComponent } from './components/creditos/creditos.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    InicioComponent,
    FooterComponent,
    NavbarComponent,
    Modulo1Component,
    Modulo2Component,
    Modulo3Component,
    Modulo4Component,
    CreditosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
