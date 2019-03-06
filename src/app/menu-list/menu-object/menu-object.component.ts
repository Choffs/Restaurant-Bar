import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../shared/menu-item.model';
@Component({
  selector: 'app-menu-object',
  templateUrl: './menu-object.component.html',
  styleUrls: ['./menu-object.component.css']
})
export class MenuObjectComponent implements OnInit {

  @Input() Item: MenuItem;

  constructor() { }

  ngOnInit() {
    $(function () {
  $('[data-toggle="popover"]').popover()
})
  }

}
