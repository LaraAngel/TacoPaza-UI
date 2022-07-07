import { Injectable } from '@angular/core';
import {OrderListEntity} from "../../../../models/sales/orders/OrderListEntity";
import {Status} from "../../../../models/utils/Status.interface";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  callDummyOrderList() {
    return ordersList;
  }
  callDummyOrderListColumns(){
    return ordersListColumns;
  }
}

const ordersListColumns: string[] = ["Folio", "Responsable", "Fecha", "Hora", "Sucursal", "Estatus", "Total"]
const status = new Status("1", "Active");
const ordersList: OrderListEntity[] = [
  new OrderListEntity(1, "001", "Juanita Perengana", "03/07/2022", "10:00", "Andamios", status, "250.00"),
  new OrderListEntity(2, "002", "Juanita Perengana", "03/07/2022", "11:00", "Andamios", status, "250.00"),
  new OrderListEntity(3, "003", "Juanita Perengana", "03/07/2022", "20:00", "Andamios", status, "250.00"),
  new OrderListEntity(4, "004", "Juanita Perengana", "03/07/2022", "21:00", "Andamios", status, "250.00"),
  new OrderListEntity(5, "005", "Juanita Perengana", "04/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(6, "006", "Juanita Perengana", "04/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(7, "007", "Juanita Perengana", "04/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(8, "008", "Juanita Perengana", "04/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(9, "009", "Juanita Perengana", "04/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(10, "010", "Juanita Perengana", "04/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(11, "012", "Juanita Perengana", "04/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(12, "013", "Juanita Perengana", "05/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(13, "014", "Juanita Perengana", "05/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(14, "015", "Juanita Perengana", "05/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(15, "016", "Juanita Perengana", "05/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(16, "017", "Juanita Perengana", "05/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(17, "018", "Juanita Perengana", "05/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(18, "019", "Juanita Perengana", "06/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(19, "020", "Juanita Perengana", "06/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(20, "022", "Juanita Perengana", "06/07/2022", "00:00", "Andamios", status, "250.00"),
  new OrderListEntity(21, "023", "Juanita Perengana", "06/07/2022", "00:00", "Andamios", status, "250.00"),
]
