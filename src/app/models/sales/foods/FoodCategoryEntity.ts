import {Status} from "../../utils/Status.interface";

export class FoodCategoryEntity {
  id: string
  foodCategoryName: string
  status: Status

  constructor(id: string, foodCategoryName: string, status: Status) {
    this.id = id;
    this.foodCategoryName = foodCategoryName;
    this.status = status;
  }
}
