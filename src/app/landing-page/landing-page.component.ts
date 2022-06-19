import { Component, OnInit } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor() { }
  
  public showMenuBool = true;
  public isInventoryClicker = true;


  ngOnInit(): void {
  }

  public clickOnMenu(e: boolean){
    this.showMenuBool = e;
  }

  public showInventory(e: boolean){
    this.isInventoryClicker = e;
  }

  public onClickedOutside(e: Event) {
    this.showMenuBool= e.isTrusted
  }

}
