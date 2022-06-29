import { Component, Input, OnInit, Output } from '@angular/core';
import {GlobalVariables} from "../../Utils/global.variables";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  showMenuBool = true;
  isInventoryClicker = true;

  page: GlobalVariables;

  constructor(gVariables: GlobalVariables) {
    this.page = gVariables;
  }

  ngOnInit(): void {
    this.isInventoryClicker = this.page.section === 'Inventory';
  }

  public clickOnMenu(e: boolean) {
    this.showMenuBool = e;
  }

  public showInventory() {
    return this.page.section == 'Inventario' && this.page.status == 'Active';
  }
  public showSales() {
    return this.page.section == 'Ventas' && this.page.status == 'Active';
  }
  public showBuyers() {
    return this.page.section == 'Compras' && this.page.status == 'Active';
  }
  public showReports() {
    return this.page.section == 'Reportes' && this.page.status == 'Active';
  }
  public showAdministration() {
    return this.page.section == 'Administracion' && this.page.status == 'Active';
  }

  public onClickedOutside(e: Event) {
    this.showMenuBool = e.isTrusted
  }

}
