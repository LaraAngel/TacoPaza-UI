import { Component, OnInit } from '@angular/core';
import {GlobalVariables} from "../../Utils/global.variables";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  private page: GlobalVariables;

  constructor(gVariables: GlobalVariables) {
    this.page = gVariables;
  }

  ngOnInit(): void {
  }

}
