import {Status} from "../utils/Status.interface";

export class OrderEntity{
  order_ID: string
  order_Folio: string
  order_Responsable: string
  date: string
  hour: string
  branch: string
  status: string
  total: number

}
