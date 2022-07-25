import { Component, OnInit } from '@angular/core';
import {DepartmentPages} from "../departmentPages";
import {DepartmentService} from "../service/department.service";

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  dataSource: any = this.service.callDummyDepartmentList();
  displayedColumns: string[] = ["Nombre", "Descripcion"];


  constructor(public pages:DepartmentPages, private service:DepartmentService) { }

  ngOnInit(): void {
  }

}
