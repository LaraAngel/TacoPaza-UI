export class Status {
  private _id: string
  private _statusName: string
  private _statusDescription: string

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

  get statusDescription(): string {
    return this._statusDescription;
  }

  set statusDescription(value: string) {
    this._statusDescription = value;
  }
}
