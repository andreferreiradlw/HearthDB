import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeViewComponent,
      CardViewComponent,
      FilterMenuComponent,
      DetailMenuComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      NgbModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
