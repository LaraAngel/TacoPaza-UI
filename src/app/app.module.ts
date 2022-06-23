import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MenuCategoryComponent } from './components/menu/menu-category/menu-category.component';
import { MenuCategoryOptionComponent } from './components/menu/menu-category-option/menu-category-option.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import { ClickOutsideModule } from 'ng-click-outside';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { MenuComponent } from './components/menu/menu.component';
import {GlobalVariables} from "./components/Utils/global.variables";
import { SalesComponent } from './components/sales/sales.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AdministrationComponent } from './components/administration/administration.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderPageComponent,
    MenuComponent,
    MenuCategoryComponent,
    MenuCategoryOptionComponent,
    IndexPageComponent,
    InventoryComponent,
    SalesComponent,
    BuyersComponent,
    ReportsComponent,
    AdministrationComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatTreeModule,
    MatButtonModule,
    ClickOutsideModule,
    HttpClientModule,
  ],
  providers: [GlobalVariables],
  bootstrap: [AppComponent]
})
export class AppModule { }
