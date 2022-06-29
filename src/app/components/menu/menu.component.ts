import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuCategory } from 'src/app/models/menu/MenuCategory.interface';
import { MenuService} from './service/menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories: MenuCategory[];

  constructor(private service: MenuService) {}

  ngOnInit(): void {
    this.service.callGetMenuCategories().subscribe(data => this.categories = data);
  }

}
