import { Component, Input, OnInit } from '@angular/core';
import { MenuCategoryEntity } from 'src/app/models/menu/MenuCategoryEntity';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent implements OnInit {


  @Input() categorie: MenuCategoryEntity;

  constructor() { }

  ngOnInit(): void {
  }

}
