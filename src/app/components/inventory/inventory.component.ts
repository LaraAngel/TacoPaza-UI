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
    return this.page.subCategoryName == 'Departament' && this.page.status == 'Activo';
  }

  showInventoryControl() {
    return this.page.subCategoryName == 'InventoryControl' && this.page.status == 'Activo';
  }

  showPresentation() {
    return this.page.subCategoryName == 'Presentation' && this.page.status == 'Activo';
  }

  showProducts() {
    return this.page.subCategoryName == 'Products' && this.page.status == 'Activo';
  }

  showReceiveProducts() {
    return this.page.subCategoryName == 'ReceiveProducts' && this.page.status == 'Activo';
  }

  showInventories() {
    return this.page.subCategoryName == 'SeeInventories' && this.page.status == 'Activo';
  }

  showUnitMeasures() {
    return this.page.subCategoryName == 'UnitMeasure' && this.page.status == 'Activo';
  }
}
