import { Component, Input, OnInit } from '@angular/core';
import {GlobalVariables} from "../../Utils/global.variables";
import {SubCategory} from "../../../models/menu/SubCategory";

@Component({
  selector: 'app-menu-category-option',
  templateUrl: './menu-category-option.component.html',
  styleUrls: ['./menu-category-option.component.css']
})
export class MenuCategoryOptionComponent implements OnInit {

  @Input() subCategory: SubCategory;
  @Input() category: string;

  constructor(private gVariables: GlobalVariables) { }

  ngOnInit(): void {
  }

  showClick() {
    this.gVariables.section =this.category;
    this.gVariables.pageName = this.subCategory.pageName;
  }

}
