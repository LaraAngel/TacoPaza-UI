import {Component, OnInit, ViewChild} from '@angular/core';
import {OrdersService} from "./service/orders.service";
import {OrderEntity} from "../../../models/sales/Order.entity";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['Folio', 'Responsable', 'Fecha', 'Hora', 'Sucursal', 'status', 'Total'];

  constructor(private service: OrdersService) { }
  dataSource = new MatTableDataSource<OrderEntity>(displayData);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
  }

}
const displayData: OrderEntity[] = [
  {order_ID:'1', order_Folio: '001', order_Responsable: 'Pepe Jimenez', date: '28/06/22', hour:'15:43', branch: 'Andamios', status: 'Cancelada', total: 72},
  {order_ID:'2', order_Folio: '002', order_Responsable: 'Jose Jimenez', date: '29/06/22', hour:'15:04', branch: 'Periqueras', status: 'En proceso',total:  93},
  {order_ID:'3', order_Folio: '003', order_Responsable: 'Alfredo Jime', date: '30/06/22',hour: '11:14', branch: 'Oblatos',status:  'Pagada', total: 84},
  {order_ID:'4', order_Folio: '004', order_Responsable: 'Ramon Ramire', date: '28/06/22', hour:'23:53', branch: 'Solarium', status: 'Pagada', total: 75},
  {order_ID:'5', order_Folio: '005', order_Responsable: 'Javier Jicam', date: '28/06/22', hour:'21:42', branch: 'Tenochtitlan', status: 'Cancelada', total: 125},
  {order_ID:'6', order_Folio: '006', order_Responsable: 'Verdino Limo', date: '28/06/22', hour:'17:13', branch: 'Andamios', status: 'Pagada', total: 514},
  {order_ID:'7', order_Folio: '007', order_Responsable: 'Lupe Esparza', date: '28/06/22', hour:'19:34', branch: 'Andamios', status: 'Pagada', total: 256},
  {order_ID:'8', order_Folio: '008', order_Responsable: 'Diana Queen ', date: '28/06/22', hour:'12:54', branch: 'Solarium', status: 'Pagada', total: 432},
  {order_ID:'9', order_Folio: '009', order_Responsable: 'Diogenes de ', date: '28/06/22', hour:'09:24', branch: 'Panteon Nuevo', status: 'Pagada', total: 315},
  {order_ID:'10', order_Folio: '010', order_Responsable: 'Itezel Vela', date: '28/06/22',hour: '03:31', branch: 'Oblatos', status: 'Pagada', total: 2500},
  {order_ID:'1', order_Folio: '001', order_Responsable: 'Pepe Jimenez', date: '28/06/22', hour:'15:43', branch: 'Andamios', status: 'Cancelada', total: 72},
  {order_ID:'2', order_Folio: '002', order_Responsable: 'Jose Jimenez', date: '29/06/22', hour:'15:04', branch: 'Periqueras', status: 'En proceso',total:  93},
  {order_ID:'3', order_Folio: '003', order_Responsable: 'Alfredo Jime', date: '30/06/22',hour: '11:14', branch: 'Oblatos',status:  'Pagada', total: 84},
  {order_ID:'4', order_Folio: '004', order_Responsable: 'Ramon Ramire', date: '28/06/22', hour:'23:53', branch: 'Solarium', status: 'Pagada', total: 75},
  {order_ID:'5', order_Folio: '005', order_Responsable: 'Javier Jicam', date: '28/06/22', hour:'21:42', branch: 'Tenochtitlan', status: 'Cancelada', total: 125},
  {order_ID:'6', order_Folio: '006', order_Responsable: 'Verdino Limo', date: '28/06/22', hour:'17:13', branch: 'Andamios', status: 'Pagada', total: 514},
  {order_ID:'7', order_Folio: '007', order_Responsable: 'Lupe Esparza', date: '28/06/22', hour:'19:34', branch: 'Andamios', status: 'Pagada', total: 256},
  {order_ID:'8', order_Folio: '008', order_Responsable: 'Diana Queen ', date: '28/06/22', hour:'12:54', branch: 'Solarium', status: 'Pagada', total: 432},
  {order_ID:'9', order_Folio: '009', order_Responsable: 'Diogenes de ', date: '28/06/22', hour:'09:24', branch: 'Panteon Nuevo', status: 'Pagada', total: 315},
  {order_ID:'10', order_Folio: '010', order_Responsable: 'Itezel Vela', date: '28/06/22',hour: '03:31', branch: 'Oblatos', status: 'Pagada', total: 2500},
  {order_ID:'1', order_Folio: '001', order_Responsable: 'Pepe Jimenez', date: '28/06/22', hour:'15:43', branch: 'Andamios', status: 'Cancelada', total: 72},
  {order_ID:'2', order_Folio: '002', order_Responsable: 'Jose Jimenez', date: '29/06/22', hour:'15:04', branch: 'Periqueras', status: 'En proceso',total:  93},
  {order_ID:'3', order_Folio: '003', order_Responsable: 'Alfredo Jime', date: '30/06/22',hour: '11:14', branch: 'Oblatos',status:  'Pagada', total: 84},
  {order_ID:'4', order_Folio: '004', order_Responsable: 'Ramon Ramire', date: '28/06/22', hour:'23:53', branch: 'Solarium', status: 'Pagada', total: 75},
  {order_ID:'5', order_Folio: '005', order_Responsable: 'Javier Jicam', date: '28/06/22', hour:'21:42', branch: 'Tenochtitlan', status: 'Cancelada', total: 125},
  {order_ID:'6', order_Folio: '006', order_Responsable: 'Verdino Limo', date: '28/06/22', hour:'17:13', branch: 'Andamios', status: 'Pagada', total: 514},
  {order_ID:'7', order_Folio: '007', order_Responsable: 'Lupe Esparza', date: '28/06/22', hour:'19:34', branch: 'Andamios', status: 'Pagada', total: 256},
  {order_ID:'8', order_Folio: '008', order_Responsable: 'Diana Queen ', date: '28/06/22', hour:'12:54', branch: 'Solarium', status: 'Pagada', total: 432},
  {order_ID:'9', order_Folio: '009', order_Responsable: 'Diogenes de ', date: '28/06/22', hour:'09:24', branch: 'Panteon Nuevo', status: 'Pagada', total: 315},
  {order_ID:'10', order_Folio: '010', order_Responsable: 'Itezel Vela', date: '28/06/22',hour: '03:31', branch: 'Oblatos', status: 'Pagada', total: 2500},
  {order_ID:'1', order_Folio: '001', order_Responsable: 'Pepe Jimenez', date: '28/06/22', hour:'15:43', branch: 'Andamios', status: 'Cancelada', total: 72},
  {order_ID:'2', order_Folio: '002', order_Responsable: 'Jose Jimenez', date: '29/06/22', hour:'15:04', branch: 'Periqueras', status: 'En proceso',total:  93},
  {order_ID:'3', order_Folio: '003', order_Responsable: 'Alfredo Jime', date: '30/06/22',hour: '11:14', branch: 'Oblatos',status:  'Pagada', total: 84},
  {order_ID:'4', order_Folio: '004', order_Responsable: 'Ramon Ramire', date: '28/06/22', hour:'23:53', branch: 'Solarium', status: 'Pagada', total: 75},
  {order_ID:'5', order_Folio: '005', order_Responsable: 'Javier Jicam', date: '28/06/22', hour:'21:42', branch: 'Tenochtitlan', status: 'Cancelada', total: 125},
  {order_ID:'6', order_Folio: '006', order_Responsable: 'Verdino Limo', date: '28/06/22', hour:'17:13', branch: 'Andamios', status: 'Pagada', total: 514},
  {order_ID:'7', order_Folio: '007', order_Responsable: 'Lupe Esparza', date: '28/06/22', hour:'19:34', branch: 'Andamios', status: 'Pagada', total: 256},
  {order_ID:'8', order_Folio: '008', order_Responsable: 'Diana Queen ', date: '28/06/22', hour:'12:54', branch: 'Solarium', status: 'Pagada', total: 432},
  {order_ID:'9', order_Folio: '009', order_Responsable: 'Diogenes de ', date: '28/06/22', hour:'09:24', branch: 'Panteon Nuevo', status: 'Pagada', total: 315},
  {order_ID:'10', order_Folio: '010', order_Responsable: 'Itezel Vela', date: '28/06/22',hour: '03:31', branch: 'Oblatos', status: 'Pagada', total: 2500}
];
