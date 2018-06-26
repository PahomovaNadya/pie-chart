import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetalsComponent } from './menu/menuDetals.component';
import { PressInstalation } from './pressInstalation.component';
import { FooterComponent } from './footer/footer.component';
import { CustomPageComponent } from './custompage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'press-instalation', component: PressInstalation },
  { path: 'custom-page', component: CustomPageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomPageComponent,
    HeaderComponent,
    MenuComponent,
    MenuDetalsComponent,
    PressInstalation,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    Ng2GoogleChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
