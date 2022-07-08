import { Component, OnInit } from '@angular/core';
import {FoodCategoriesPages} from "../foodCategoriesPages";
import {FormControl, Validators} from "@angular/forms";
import {FoodCategoryEntity} from "../../../../models/sales/foods/FoodCategoryEntity";
import {Status} from "../../../../models/utils/Status.interface";

@Component({
  selector: 'app-create-food-category',
  templateUrl: './create-food-category.component.html',
  styleUrls: ['./create-food-category.component.css']
})
export class CreateFoodCategoryComponent implements OnInit {

  foodCategorySelected: FoodCategoryEntity;
  categoryName = new FormControl('', [Validators.required]);
  status: Status[] = [new Status("1", "Activo"), new Status("2", "Desactivo")]

  constructor(public pages: FoodCategoriesPages) { }

  ngOnInit(): void {
  }

  saveFoodCategory() {

  }

  getErrorMessage() {
    if (this.categoryName.hasError('required')) {
      return 'La nombre de la categoria es necesario';
    }

    return this.categoryName.hasError('CategoryName') ? 'Not a valid Category Name' : '';
  }
}
