import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { MenuCategoryOptionComponent } from './menu-category-option/menu-category-option.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import { IndexPageComponent } from './index-page/index-page.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderPageComponent,
    MenuComponent,
    MenuCategoryComponent,
    MenuCategoryOptionComponent,
    IndexPageComponent,
    InventoryComponent

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
