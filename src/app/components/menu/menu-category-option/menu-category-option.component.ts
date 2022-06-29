import { Component, Input, OnInit } from '@angular/core';
import {SubCategoryInterface} from "../../../models/menu/SubCategory.interface";
import {GlobalVariables} from "../../../Utils/global.variables";

@Component({
  selector: 'app-menu-category-option',
  templateUrl: './menu-category-option.component.html',
  styleUrls: ['./menu-category-option.component.css']
})
export class MenuCategoryOptionComponent implements OnInit {

  @Input() subCategory: SubCategoryInterface;
  @Input() category: string;

  constructor(private gVariables: GlobalVariables) { }

  ngOnInit(): void {
  }

  showClick() {
    this.gVariables.section =this.category;
    this.gVariables.pageName = this.subCategory.pageName;
    this.gVariables.status = this.subCategory.status.statusName;
    console.log(this.gVariables);

  }

}
