import { Component, Input, OnInit } from '@angular/core';
import {SubCategoryEntity} from "../../../models/menu/SubCategory.entity";
import {GlobalVariables} from "../../../Utils/global.variables";

@Component({
  selector: 'app-menu-category-option',
  templateUrl: './menu-category-option.component.html',
  styleUrls: ['./menu-category-option.component.css']
})
export class MenuCategoryOptionComponent implements OnInit {

  @Input() subCategory: SubCategoryEntity;
  @Input() category: string;

  constructor(private gVariables: GlobalVariables) { }

  ngOnInit(): void {
  }

  showClick() {
    this.gVariables.section =this.category;
    this.gVariables.subCategoryName = this.subCategory.pageName;
    this.gVariables.pageName = this.subCategory.subCategoryName;
    this.gVariables.status = this.subCategory.status.statusName;
    this.gVariables.isShowpage = true;
  }

}
