import {Status} from "../utils/Status.interface";

export class SubCategoryEntity {
    private _id: string
    private _subCategoryName: string
    private _pageName: string
    status: Status;

  constructor(id: string, subCategoryName: string, pageName: string, status: Status) {
    this._id = id;
    this._subCategoryName = subCategoryName;
    this._pageName = pageName;
    this.status = status;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get subCategoryName(): string {
    return this._subCategoryName;
  }

  set subCategoryName(value: string) {
    this._subCategoryName = value;
  }

  get pageName(): string {
    return this._pageName;
  }

  set pageName(value: string) {
    this._pageName = value;
  }
}
