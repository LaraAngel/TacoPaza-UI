import {Injectable} from "@angular/core";

@Injectable()
export class DepartmentPages{

  departmentList: boolean = true
  selectedDepartment: boolean = false
  createDepartment: boolean = false

  hiddeAllPages(){
    this.departmentList = false;
    this.selectedDepartment = false;
    this.createDepartment = false;
  }

  createNewDepartment() {
    this.hiddeAllPages();
    this.createDepartment = true;
  }

  goToDepartmentList() {
    this.hiddeAllPages();
    this.departmentList = true;
  }
}
