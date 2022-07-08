import {Status} from "../../utils/Status.interface";
import {FoodCategoryEntity} from "./FoodCategoryEntity";

export class FoodProductEntity {
  id: number
  foodProductName: string
  foodCategory: FoodCategoryEntity
  price: number
  status: Status

  constructor(id: number, foodProductName: string, foodCategory: FoodCategoryEntity, price: number, status: Status) {
    this.id = id;
    this.foodProductName = foodProductName;
    this.foodCategory = foodCategory;
    this.price = price;
    this.status = status;
  }
}
