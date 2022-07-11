import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  dataTable:FoodCategoryEntity[];

  constructor(private service: FoodCategoriesService, public pages: FoodCategoriesPages) {
    this.dataTable = this.service.callDummyCategories();
  }

  ngOnChanges() {
  }

  ngOnInit(): void {
  }

  createFoodCategory() {
    this.pages.createFoodCategoryPage();
  }
  @Output() showFoodCategoryEntity = new EventEmitter<FoodCategoryEntity>();
  selectFoodCategory(row: FoodCategoryEntity) {
    this.showFoodCategoryEntity.emit(row);
  }
}
