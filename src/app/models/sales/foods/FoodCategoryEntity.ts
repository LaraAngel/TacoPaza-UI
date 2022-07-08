import {Status} from "../../utils/Status.interface";

export class FoodCategoryEntity {
  id: number
  foodCategoryName: string
  status: Status

  constructor(id: number, foodCategoryName: string, status: Status) {
    this.id = id;
    this.foodCategoryName = foodCategoryName;
    this.status = status;
  }
}
