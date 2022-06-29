import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {

  @Input() showMenuBool: boolean;

  constructor() {
    this.showMenuBool = true;
    this.showMenuEvent.emit(this.showMenuBool);
  }

  ngOnInit(): void {
  }

  @Output() showMenuEvent = new EventEmitter<boolean>();
  public showMenu() {
    this.showMenuBool = !this.showMenuBool;
    this.showMenuEvent.emit(this.showMenuBool);
  }

}
