import { Injectable } from "@angular/core";

@Injectable()
export class GlobalVariables{
  section: string = 'index';
  subCategoryName: string = 'index';
  status: string = 'Active';
  isShowpage: boolean = true;
  pageName: string;
}
