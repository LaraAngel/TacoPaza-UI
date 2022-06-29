import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {GlobalVariables} from "../../Utils/global.variables";

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {

  @Input() showMenuBool: boolean;

  page: GlobalVariables;

  constructor(gVariables: GlobalVariables) {
    this.showMenuBool = true;
    this.showMenuEvent.emit(this.showMenuBool);
    this.page = gVariables;
  }

  ngOnInit(): void {
  }

  @Output() showMenuEvent = new EventEmitter<boolean>();
  public showMenu() {
    this.showMenuBool = !this.showMenuBool;
    this.showMenuEvent.emit(this.showMenuBool);
  }

}
