import { Injectable } from "@angular/core";

@Injectable()
export class GlobalVariables{
  section: string = 'index';
  pageName: string = 'index';
  status: string = 'Active';
  subCategorySection: string = 'index';
  isShowpage: boolean = true;
}
