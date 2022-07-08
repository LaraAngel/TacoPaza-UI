import { Component, OnInit } from '@angular/core';
import {FoodCategoriesService} from "../service/food-categories.service";
import {FoodCategoriesPages} from "../foodCategoriesPages";
import {FoodCategoryEntity} from "../../../../models/sales/foods/FoodCategoryEntity";

@Component({
  selector: 'app-food-cateories-list',
  templateUrl: './food-cateories-list.component.html',
  styleUrls: ['./food-cateories-list.component.css']
})
export class FoodCateoriesListComponent implements OnInit {

  columnsHeaders: string[] = ["ID", "Categoria", "Status"];
  dataTable:FoodCategoryEntity[] = this.service.callDummyCategories();
  constructor(private service: FoodCategoriesService, public pages: FoodCategoriesPages) { }

  ngOnInit(): void {
  }

  createFoodCategory() {
    this.pages.createFoodCategoryPage();
  }

  selectFoodCategory(row: FoodCategoryEntity) {

  }
}
