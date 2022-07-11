import {Component, Input, OnInit} from '@angular/core';
import {FoodCategoriesPages} from "../foodCategoriesPages";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FoodCategoryEntity} from "../../../../models/sales/foods/FoodCategoryEntity";
import {Status} from "../../../../models/utils/Status.interface";
import {FoodCategoriesService} from "../service/food-categories.service";
import {F} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-create-food-category',
  templateUrl: './create-food-category.component.html',
  styleUrls: ['./create-food-category.component.css']
})
export class CreateFoodCategoryComponent implements OnInit {

  @Input() foodCategorySelected: FoodCategoryEntity;
  status: Status[] = [new Status("1", "Activo"), new Status("2", "Desactivo")]

  checkoutForm: FormGroup = this.builder.group({
    foodCategoryName: ['', Validators.required],
    foodCategoryStatus: ['', Validators.required]
  });

  foodCategoryCreated: FoodCategoryEntity;

  constructor(public pages: FoodCategoriesPages, private builder: FormBuilder, private service: FoodCategoriesService) {
    this.foodCategoryCreated = new FoodCategoryEntity("0", "", new Status("", ""))
  }

  ngOnChanges() {}

  ngOnInit(): void {
    this.foodCategoryCreated = this.foodCategorySelected;
  }

  getErrorMessage() {
    if (this.checkoutForm.get('foodCategoryName')?.hasError('required')) {
      return 'La nombre de la categoria es necesario';
    }
    if (this.checkoutForm.get('foodCategoryStatus')?.hasError('required') || this.foodCategoryCreated.status.statusName == "") {
      let status: Status = this.status[0];
      this.foodCategoryCreated.status = status;
      return;
    }
    return this.checkoutForm.hasError('CategoryName') ? 'Not a valid Category Data' : '';
  }

  saveFoodCategory() {
    this.service.createNewFoodCategoryDummy(this.foodCategoryCreated);
    this.goToFoodCategoriesList()
  }

  goToFoodCategoriesList() {
    this.pages.goToOrderList();
    this.checkoutForm.reset();
    this.checkoutForm.get('foodCategoryName')?.clearValidators();
    this.checkoutForm.get('foodCategoryName')?.updateValueAndValidity();
    this.checkoutForm.get('foodCategoryStatus')?.clearValidators();
    this.checkoutForm.get('foodCategoryStatus')?.updateValueAndValidity();
    this.foodCategorySelected = new FoodCategoryEntity("", "", new Status("", ""));
  }
}
