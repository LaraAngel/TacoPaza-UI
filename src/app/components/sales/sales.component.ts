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
    console.log(gVariables.subCategoryName);
  }

  ngOnInit(): void {
  }

  public showOrders() {
    return this.page.subCategoryName == 'Orders' && this.page.status == 'Active';
  }

  public showFoodPackages() {
    return this.page.subCategoryName == 'PackageFoods' && this.page.status == 'Active';
  }

  public showFoods() {
    return this.page.subCategoryName == 'Foods' && this.page.status == 'Active';
  }

  public showBalancesCash() {
    return this.page.subCategoryName == 'BalancesCash' && this.page.status == 'Active';
  }
}
