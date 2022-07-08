import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {OrderListEntity} from "../../../models/sales/orders/OrderListEntity";
import {OrdersService} from "./service/orders.service";
import {OrderPages} from "./orderPages";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public pages: OrderPages) { }

  ngOnInit(): void {}

}
