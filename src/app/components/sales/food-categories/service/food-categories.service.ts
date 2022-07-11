import { Injectable } from '@angular/core';
import {FoodCategoryEntity} from "../../../../models/sales/foods/FoodCategoryEntity";
import {Status} from "../../../../models/utils/Status.interface";

@Injectable({
  providedIn: 'root'
})
export class FoodCategoriesService {

  foodCategoriesList= [...foodCategories];

  constructor() { }
  callDummyCategories(){
    return this.foodCategoriesList;
  }

  createNewFoodCategoryDummy(foodCategoryCreated: FoodCategoryEntity) {
    if(foodCategoryCreated.id == '0'){
      foodCategoryCreated.id = `${this.foodCategoriesList.length++}`;
      this.foodCategoriesList.push(foodCategoryCreated);
    }else{
      this.foodCategoriesList.forEach((value, index) => {
        if(value.id == foodCategoryCreated.id){
          this.foodCategoriesList[index].foodCategoryName = foodCategoryCreated.foodCategoryName;
        }
      });
    }
  }
}

const status = new Status("1", "Disponible");

const foodCategories: FoodCategoryEntity[] = [
  new FoodCategoryEntity("1", "Tacos", status),
  new FoodCategoryEntity("1", "Tortas", status),
  new FoodCategoryEntity("1", "Bebidas", status)
]
