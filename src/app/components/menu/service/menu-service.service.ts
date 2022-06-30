import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MenuCategory } from 'src/app/models/menu/MenuCategory.entity';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  callGetMenuCategories(): Observable<MenuCategory[]>{
    return this.http.get<MenuCategory[]>('http://localhost:8020/system/menu/categories');
  }
}
