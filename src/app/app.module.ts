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
import {GlobalVariables} from "./Utils/global.variables";
import { SalesComponent } from './components/sales/sales.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { SeeInventoriesComponent } from './components/inventory/see-inventories/see-inventories.component';
import { InventoryControlComponent } from './components/inventory/inventory-control/inventory-control.component';
import { ReceiveProductComponent } from './components/inventory/receive-product/receive-product.component';
import { ProductsComponent } from './components/inventory/products/products.component';
import { PresentationComponent } from './components/inventory/presentation/presentation.component';
import { UnitMeasuresComponent } from './components/inventory/unit-measures/unit-measures.component';
import { DepartmentComponent } from './components/inventory/department/department.component';
import { BranchesComponent } from './components/administration/branches/branches.component';
import { UsersComponent } from './components/administration/users/users.component';
import { SystemComponent } from './components/administration/system/system.component';
import { StatusComponent } from './components/administration/status/status.component';
import { ReportsAdministrationComponent } from './components/administration/reports-administration/reports-administration.component';
import { PurchaseOrdersComponent } from './components/buyers/purchase-orders/purchase-orders.component';
import { ProductSuppliersComponent } from './components/buyers/product-suppliers/product-suppliers.component';
import { DirectPurchaseComponent } from './components/buyers/direct-purchase/direct-purchase.component';
import { OrdersComponent } from './components/sales/orders/orders.component';
import { BalancesCashComponent } from './components/sales/balances-cash/balances-cash.component';
import { FoodsComponent } from './components/sales/foods/foods.component';
import { FoodPackagesComponent } from './components/sales/food-packages/food-packages.component';
import { OrderListComponent } from './components/sales/orders/order-list/order-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {OrderPages} from "./components/sales/orders/orderPages";
import { CreateOrderComponent } from './components/sales/orders/create-order/create-order.component';
import { FoodCategoriesComponent } from './components/sales/food-categories/food-categories.component';
import { FoodCateoriesListComponent } from './components/sales/food-categories/food-cateories-list/food-cateories-list.component';
import { CreateFoodCategoryComponent } from './components/sales/food-categories/create-food-category/create-food-category.component';
import {FoodCategoriesPages} from "./components/sales/food-categories/foodCategoriesPages";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { DepartmentListComponent } from './components/inventory/department/department-list/department-list.component';
import { CreateDepartmentComponent } from './components/inventory/department/create-department/create-department.component';
import {DepartmentPages} from "./components/inventory/department/departmentPages";


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
    AdministrationComponent,
    SeeInventoriesComponent,
    InventoryControlComponent,
    ReceiveProductComponent,
    ProductsComponent,
    PresentationComponent,
    UnitMeasuresComponent,
    DepartmentComponent,
    BranchesComponent,
    UsersComponent,
    SystemComponent,
    StatusComponent,
    ReportsAdministrationComponent,
    PurchaseOrdersComponent,
    ProductSuppliersComponent,
    DirectPurchaseComponent,
    OrdersComponent,
    BalancesCashComponent,
    FoodsComponent,
    FoodPackagesComponent,
    OrderListComponent,
    CreateOrderComponent,
    FoodCategoriesComponent,
    FoodCateoriesListComponent,
    CreateFoodCategoryComponent,
    CreateOrderComponent,
    DepartmentListComponent,
    CreateDepartmentComponent

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
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
    ],
  providers: [
    GlobalVariables,
    OrderPages,
    DepartmentPages,
    OrderPages,
    FoodCategoriesPages
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
