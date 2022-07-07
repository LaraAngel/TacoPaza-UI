import {Status} from "../../utils/Status.interface";

export class OrderListEntity {
  id: number
  folio: string
  responsible: string
  date: string
  hour: string
  branch: string
  status: Status
  total: string

  constructor(id: number, folio: string, responsible: string, date: string, hour: string, branch: string, status: Status, total: string) {
    this.id = id;
    this.folio = folio;
    this.responsible = responsible;
    this.date = date;
    this.hour = hour;
    this.branch = branch;
    this.status = status;
    this.total = total;
  }
}
