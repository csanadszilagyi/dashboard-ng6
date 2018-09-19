import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { Observable, Subscription } from 'rxjs';
import _ from 'lodash';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  private _product: Product = null;

  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {}

  ngOnInit() {

    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id: number = +params.get('id');
        this.productService.get(id).subscribe((response: any) => {
          this._product = response.product;
        });
      }
    );
  }
}
