import { Component, OnInit } from '@angular/core';
import {GlobalVariables} from "../../Utils/global.variables";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  private page: GlobalVariables;

  constructor(gVariables: GlobalVariables) {
    this.page = gVariables;
  }

  ngOnInit(): void {
  }

  showDepartment() {
    return this.page.subCategorySection == 'Department' && this.page.status == 'Active';
  }

  showInventoryControl() {
    return this.page.subCategorySection == 'InventoryControl' && this.page.status == 'Active';
  }

  showPresentation() {
    return this.page.subCategorySection == 'Presentation' && this.page.status == 'Active';
  }

  showProducts() {
    return this.page.subCategorySection == 'Products' && this.page.status == 'Active';
  }

  showReceiveProducts() {
    return this.page.subCategorySection == 'ReceiveProducts' && this.page.status == 'Active';
  }

  showInventories() {
    return this.page.subCategorySection == 'SeeInventories' && this.page.status == 'Active';
  }

  showUnitMeasures() {
    return this.page.subCategorySection == 'UnitMeasure' && this.page.status == 'Active';
  }
}
