import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DepartmentListEntity} from "../../../../models/inventory/department/DepartmentListEntity";
import {MatPaginator} from "@angular/material/paginator";
import {DepartmentService} from "../service/department.service";
import {DepartmentPages} from "../departmentPages";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private department: DepartmentService, private departmentPage: DepartmentPages) {
  }

  ngOnInit(): void {
  }

  dataSource = new MatTableDataSource<DepartmentListEntity>(this.department.callDummyDepartmentList());
  displayedColumns: string[] = this.department.callDummyDepartmentColumns();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  selectedDepartment(row: DepartmentListEntity) {
    console.log(row);
  }

  createDepartment() {
    this.departmentPage.createNewDepartment();
  }
}
