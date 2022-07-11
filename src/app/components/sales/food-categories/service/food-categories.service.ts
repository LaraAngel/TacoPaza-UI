import { Injectable } from '@angular/core';
import {FoodCategoryEntity} from "../../../../models/sales/foods/FoodCategoryEntity";
import {Status} from "../../../../models/utils/Status.interface";

@Injectable({
  providedIn: 'root'
})
export class FoodCategoriesService {

  constructor() { }
  callDummyCategories(){
    console.log(foodCategories);
    return foodCategories;
  }

  createNewFoodCategoryDummy(foodCategoryCreated: FoodCategoryEntity) {
    foodCategories.push(foodCategoryCreated);
    console.log(foodCategories);
  }
}

const status = new Status("1", "Disponible");

let foodCategories: FoodCategoryEntity[] = [
  new FoodCategoryEntity("1", "Tacos", status),
  new FoodCategoryEntity("1", "Tortas", status),
  new FoodCategoryEntity("1", "Bebidas", status)
]
