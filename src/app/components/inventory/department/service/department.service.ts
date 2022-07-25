import { Injectable } from '@angular/core';
import {DepartmentListEntity} from "../../../../models/inventory/department/DepartmentListEntity";
import {Status} from "../../../../models/utils/Status.interface";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  callDummyDepartmentList(){
    return departmentList;
  }
  callDummyDepartmentColumns(){
    return departmentListColumns;
  }
}

const departmentListColumns: string[] = ["ID","Nombre", "Descripcion", "Status"];
const status = new Status("1","Active");
const departmentList: DepartmentListEntity[] =[
  new DepartmentListEntity(1,"Drinks","Drinkable products",status),
  new DepartmentListEntity(2,"Meats","vacas/cerdos muertos products",status),
  new DepartmentListEntity(3,"Spices","seasoning products",status),
  new DepartmentListEntity(4,"Fruits and vegetables","it's morbin' time",status),
  new DepartmentListEntity(5,"Tool","weapons",status),
];
