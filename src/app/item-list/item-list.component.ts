import { Component } from '@angular/core';
import {Item} from "./item";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  items: Item[] = [];

  ngOnInit(): void {
    this.items = [
      {id: 1, name: 'Item 1', price: 12.5, stock: 20},
      {id: 2, name: 'Item 2', price: 15, stock: 10},
      {id: 3, name: 'Item 3', price: 18.99, stock: 0}
    ];
  }

}
