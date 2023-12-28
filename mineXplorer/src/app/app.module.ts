import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { GameLauncherComponent } from './library/components/game-launcher/game-launcher.component';
import { NavbarComponent } from './library/components/navbar/navbar.component';
import { ResultComponent } from './library/components/result/result.component';
import { RulesComponent } from './library/components/rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    GameLauncherComponent,
    NavbarComponent,
    ResultComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
