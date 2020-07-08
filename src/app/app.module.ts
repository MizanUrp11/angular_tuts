import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MatSliderModule } from "@angular/material/slider"
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path: 'crisis-list', component: CrisisListComponent},
      {path: 'heroes-list',component: HeroesListComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
