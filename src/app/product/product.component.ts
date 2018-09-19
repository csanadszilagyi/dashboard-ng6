import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // _item: Product = null;

  @Input() item: Product;

  /*
  set item(val: Product) {
    this._item = val;
  }
  get item(): Product {
    return this._item;
  }
  */

  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  handleEdit($event, id: number): void {
    this.edit.emit({ event: $event, id: id });
  }

  handleRemove($event, id: number): void {
    this.remove.emit({ event: $event, id: id });
  }
}
