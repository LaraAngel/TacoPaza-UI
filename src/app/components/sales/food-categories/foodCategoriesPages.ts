import {Injectable} from "@angular/core";

@Injectable()
export class FoodCategoriesPages {
  foodCategoriesList: boolean = true
  selectedFoodCategory: boolean = false
  createFoodCategory: boolean = false

  hiddeAllPages(){
    this.foodCategoriesList = false;
    this.selectedFoodCategory = false;
    this.createFoodCategory = false;
  }

  createFoodCategoryPage() {
    this.hiddeAllPages();
    this.createFoodCategory = true;
  }

  goToFoodCategoriesList() {
    this.hiddeAllPages();
    this.foodCategoriesList = true;
  }
}
