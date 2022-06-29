import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../menu/service/menu-service.service";
import {BalancesCashService} from "./service/balances-cash.service";

@Component({
  selector: 'app-balances-cash',
  templateUrl: './balances-cash.component.html',
  styleUrls: ['./balances-cash.component.css']
})
export class BalancesCashComponent implements OnInit {

  constructor(private service: BalancesCashService) {}

  ngOnInit(): void {
  }

}
