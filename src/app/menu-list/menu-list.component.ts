import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCatList } from './shared/menu-category-list.model';
import { MenuItem } from './shared/menu-item.model';
import { FOOD } from './shared/fake-db-item-list.array';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  ListType: string;

  FoodList: ItemCatList[] = FOOD;
  DrinkList: ItemCatList[];

  constructor( private router: Router) { }

  ngOnInit() {

    if(this.router.url === '/food')
    {
      this.ListType = "Food";
      console.log(this.FoodList.length);
    }else if(this.router.url === '/drink')
    {
      this.ListType = "Drink";
      console.log("Build Drink List");
    }
    else
    {
      this.ListType = "NONE";
    }
    console.log(this.router.url);
  }

}
