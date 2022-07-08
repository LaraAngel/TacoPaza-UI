import { Component, OnInit } from '@angular/core';
import {GlobalVariables} from "../../../Utils/global.variables";
import {DepartmentPages} from "./departmentPages";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  private page: GlobalVariables;

  constructor(
    gVariables: GlobalVariables,
    public pages:DepartmentPages
  ) {
    this.page = gVariables;
  }
  ngOnInit(): void {
  }
}
