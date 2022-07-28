import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiferentesMapasComponent } from './componet/diferentes-mapas/diferentes-mapas.component';
import { MapaBaseComponent } from './componet/mapa-base/mapa-base.component';
import { MenuComponent } from './componet/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DiferentesMapasComponent,
    MapaBaseComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
