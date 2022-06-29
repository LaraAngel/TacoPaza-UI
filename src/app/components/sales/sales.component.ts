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
    console.log(gVariables.pageName);
  }

  ngOnInit(): void {
  }

  public showOrders() {
    return this.page.pageName == 'Orders' && this.page.status == 'Active';
  }

  public showFoodPackages() {
    return this.page.pageName == 'PackageFoods' && this.page.status == 'Active';
  }

  public showFoods() {
    return this.page.pageName == 'Foods' && this.page.status == 'Active';
  }

  public showBalancesCash() {
    return this.page.pageName == 'BalancesCash' && this.page.status == 'Active';
  }
}
