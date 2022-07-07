import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {OrderListEntity} from "../../../../models/sales/orders/OrderListEntity";
import {MatPaginator} from "@angular/material/paginator";
import {OrdersService} from "../service/orders.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private order: OrdersService) { }

  ngOnInit(): void {
  }
  dataSource = new MatTableDataSource<OrderListEntity>(this.order.callDummyOrderList());
  displayedColumns: string[] = this.order.callDummyOrderListColumns();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  selectedOrder(row: OrderListEntity) {
    console.log(row)
  }
}
