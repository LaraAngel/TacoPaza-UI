import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public showMenuBool = true;
  isShowingInventory = true;
  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() showInventoryPage = new EventEmitter<boolean>();
  public showInventory(){
    this.showInventoryPage.emit(!this.isShowingInventory);
  }



}
