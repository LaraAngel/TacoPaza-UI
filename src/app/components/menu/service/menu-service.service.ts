import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MenuCategoryEntity } from 'src/app/models/menu/MenuCategoryEntity';
import {SubCategoryEntity} from "../../../models/menu/SubCategoryEntity";
import {Status} from "../../../models/utils/Status.interface";

const status = new Status("1", "Active");

const subCategories = [
  new SubCategoryEntity("1", "Orders", "Comanda", status),
  new SubCategoryEntity("1", "CashBalances", "Corte de Caja", status),
  new SubCategoryEntity("1", "FoodProducts", "Alimentos", status),
  new SubCategoryEntity("1", "FoodPackages", "Paquetes", status)
];

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuCategories: MenuCategoryEntity[] = [
    new MenuCategoryEntity("1", "Ventas", subCategories, status)
  ];

  constructor(private http: HttpClient) { }

  callGetMenuCategories(): Observable<MenuCategoryEntity[]>{
    return this.http.get<MenuCategoryEntity[]>('http://localhost:8020/system/menu/categories');
  }

  callDummyGetMenuCategories(): MenuCategoryEntity[]{
    return this.menuCategories;
  }
}
