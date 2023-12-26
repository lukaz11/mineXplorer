import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLauncherComponent } from './library/components/game-launcher/game-launcher.component';

const routes: Routes = [
  {path:'game',component:GameLauncherComponent},
  {path:'**',component:GameLauncherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
