import { Component, OnInit } from '@angular/core';
import {GlobalVariables} from "../../Utils/global.variables";

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {
  private page: GlobalVariables;

  constructor(gVariables: GlobalVariables) {
    this.page = gVariables;
  }


  ngOnInit(): void {
  }

}
