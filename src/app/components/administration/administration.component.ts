import { Component, OnInit } from '@angular/core';
import {GlobalVariables} from "../../Utils/global.variables";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  private page: GlobalVariables;

  constructor(gVariables: GlobalVariables) {
    this.page = gVariables;
  }


  ngOnInit(): void {
  }

}
