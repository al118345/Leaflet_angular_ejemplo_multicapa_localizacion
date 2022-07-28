import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapaBaseComponent} from "./componet/mapa-base/mapa-base.component";
import {DiferentesMapasComponent} from "./componet/diferentes-mapas/diferentes-mapas.component";

const routes: Routes = [
  { path: 'diferente-mapas', component: DiferentesMapasComponent },
  { path: '**',  component: MapaBaseComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
