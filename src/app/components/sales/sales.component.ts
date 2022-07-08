import { Component, OnInit } from '@angular/core';
import {GlobalVariables} from "../../Utils/global.variables";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  private page: GlobalVariables;

  constructor(gVariables: GlobalVariables) {
    this.page = gVariables;
  }

  ngOnInit(): void {
  }

  public showOrders() {
    return this.page.subCategorySection == 'Orders' && this.page.status == 'Active';
  }

  public showFoodPackages() {
    return this.page.subCategorySection == 'FoodPackages' && this.page.status == 'Active';
  }

  public showFoods() {
    return this.page.subCategorySection == 'FoodProducts' && this.page.status == 'Active';
  }

  public showBalancesCash() {
    return this.page.subCategorySection == 'CashBalances' && this.page.status == 'Active';
  }

  showFoodCategories() {
    return this.page.subCategorySection == 'FoodCategories' && this.page.status == 'Active';
  }
}
