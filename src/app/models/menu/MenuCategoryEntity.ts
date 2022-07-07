import {SubCategoryEntity} from "./SubCategoryEntity";
import {Status} from "../utils/Status.interface";

export class MenuCategoryEntity {
  private _id: string
  private _categoryName: string
  subCategories: SubCategoryEntity[]
  status: Status;

  constructor(id: string, categoryName: string, subCategories: SubCategoryEntity[], status: Status) {
    this._id = id;
    this._categoryName = categoryName;
    this.subCategories = subCategories;
    this.status = status;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get categoryName(): string {
    return this._categoryName;
  }

  set categoryName(value: string) {
    this._categoryName = value;
  }
}
