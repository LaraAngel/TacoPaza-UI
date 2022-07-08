import { Component, OnInit } from '@angular/core';
import {OrderPages} from "../orderPages";
import {OrdersService} from "../service/orders.service";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  dataSource: any = this.service.callDummyOrderList();
  displayedColumns: string[] = ["Produtos", "Precio", "Cantidad", "Subtotal", "Total"];

  constructor(public pages: OrderPages, private service: OrdersService) { }

  ngOnInit(): void {
  }

}
