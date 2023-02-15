import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  collapsed = true;
  @Output() page = new EventEmitter<string>();

  onSelect(page:string){
    this.page.emit(page);
  }
}
