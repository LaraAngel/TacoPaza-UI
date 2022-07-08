import {Status} from "../../utils/Status.interface";
import {FoodProductEntity} from "../foods/FoodProductEntity";

export class FoodProductOrderEntity {
  id: number
  foodProduct: FoodProductEntity
  comments: string
  isPrinted: boolean
  quantity: number
  status: Status
}

