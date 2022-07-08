import { Component, OnInit } from '@angular/core';
import {FoodCategoriesPages} from "./foodCategoriesPages";

@Component({
  selector: 'app-food-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.css']
})
export class FoodCategoriesComponent implements OnInit {

  constructor(public pages: FoodCategoriesPages) { }

  ngOnInit(): void {
  }

}
