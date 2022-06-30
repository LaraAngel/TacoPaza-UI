import { Component, Input, OnInit } from '@angular/core';
import { MenuCategory } from 'src/app/models/menu/MenuCategory.entity';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent implements OnInit {


  @Input() categorie: MenuCategory;

  constructor() { }

  ngOnInit(): void {
  }

}
