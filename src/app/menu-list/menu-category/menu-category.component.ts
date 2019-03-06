import { Component, OnInit,Input } from '@angular/core';
import { MenuItem } from '../shared/menu-item.model';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent implements OnInit {
  @Input() category: string = "Defualt";
  @Input() MenuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}
