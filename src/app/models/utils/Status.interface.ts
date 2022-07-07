export class Status {

  private _id: string
  private _statusName: string

  constructor(id: string, statusName: string) {
    this._id = id;
    this._statusName = statusName;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get statusName(): string {
    return this._statusName;
  }

  set statusName(value: string) {
    this._statusName = value;
  }

}
