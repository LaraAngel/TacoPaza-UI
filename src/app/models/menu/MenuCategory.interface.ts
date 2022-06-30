import {SubCategoryInterface} from "./SubCategory.interface";
import {Status} from "../utils/Status.interface";

export class MenuCategory {
  private _id: string
  private _categoryName: string
  private _subCategories: SubCategoryInterface[]
  private _status: Status;

  constructor(id: string, categoryName: string, subCategories: SubCategoryInterface[], status: Status) {
    this._id = id;
    this._categoryName = categoryName;
    this._subCategories = subCategories;
    this._status = status;
  }

  get status(): Status {
    return this._status;
  }

  set status(value: Status) {
    this._status = value;
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

  get subCategories(): SubCategoryInterface[] {
    return this._subCategories;
  }

  set subCategories(value: SubCategoryInterface[]) {
    this._subCategories = value;
  }
}
