import {Injectable} from "@angular/core";

@Injectable()
export class OrderPages {
  orderList: boolean = true
  selectedScreen: boolean = false
  createOrder: boolean = false

  hiddeAllPages(){
    this.orderList = false;
    this.selectedScreen = false;
    this.createOrder = false;
  }

  createNewOrder() {
    this.hiddeAllPages();
    this.createOrder = true;
  }

  goToOrderList() {
    this.hiddeAllPages();
    this.orderList = true;
  }
}
