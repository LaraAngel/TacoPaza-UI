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
    return this.page.pageName == 'Departament' && this.page.status == 'Activo';
  }

  showInventoryControl() {
    return this.page.pageName == 'InventoryControl' && this.page.status == 'Activo';
  }

  showPresentation() {
    return this.page.pageName == 'Presentation' && this.page.status == 'Activo';
  }

  showProducts() {
    return this.page.pageName == 'Products' && this.page.status == 'Activo';
  }

  showReceiveProducts() {
    return this.page.pageName == 'ReceiveProducts' && this.page.status == 'Activo';
  }

  showInventories() {
    return this.page.pageName == 'SeeInventories' && this.page.status == 'Activo';
  }

  showUnitMeasures() {
    return this.page.pageName == 'UnitMeasure' && this.page.status == 'Activo';
  }
}
