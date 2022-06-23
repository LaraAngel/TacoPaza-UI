import {SubCategory} from "./SubCategory";

export interface MenuCategory {
  "id": string,
  "categoryName": string,
  "subCategories": SubCategory[]
}
