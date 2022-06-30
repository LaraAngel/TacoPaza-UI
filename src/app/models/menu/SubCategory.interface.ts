import {Status} from "../utils/Status.interface";

export class SubCategoryInterface {
    private _id: string
    private _subCategoryName: string
    private _pageName: string
    private _status: Status;

  constructor(id: string, subCategoryName: string, pageName: string, status: Status) {
    this._id = id;
    this._subCategoryName = subCategoryName;
    this._pageName = pageName;
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
