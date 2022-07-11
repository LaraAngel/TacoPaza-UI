import { Component, OnInit } from '@angular/core';
import {FoodCategoriesPages} from "./foodCategoriesPages";
import {FoodCategoryEntity} from "../../../models/sales/foods/FoodCategoryEntity";
import {F} from "@angular/cdk/keycodes";
import {Status} from "../../../models/utils/Status.interface";

@Component({
  selector: 'app-food-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.css']
})
export class FoodCategoriesComponent implements OnInit {
  foodCategoryEntity: FoodCategoryEntity = new FoodCategoryEntity("", "", new Status("", ""));

  constructor(public pages: FoodCategoriesPages) { }

  ngOnInit(): void {
  }

  selectedCategory(selectedFoodCategory: FoodCategoryEntity) {
    this.foodCategoryEntity = selectedFoodCategory;
    this.pages.createFoodCategoryPage();
  }
}
