import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { Observable } from 'rxjs';
import _ from 'lodash';
import { ModalInfo } from '../ModalInfo';
import { ModalTypesService } from '../services/modal-types.service';
import { ModalInstance } from 'ngx-smart-modal/src/services/modal-instance';
import { scaleAnimation } from '../animations';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  animations: [scaleAnimation]
})
export class ListProductsComponent implements OnInit {

  private _products: Product[];

  modalContent: string = '';
  modalClasses: {};

  currentProduct: Product = null;

  loading = true;

  crudModal: ModalInfo;

  private _acceptFunc: Function = null;

  constructor(public ngxSmartModalService: NgxSmartModalService,
    private router: Router,
    private productService: ProductService,
    private modalTypesService: ModalTypesService,
    private sharedData: SharedDataService) {}

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(afterSucces: VoidFunction = null, delay: number = 200): void {
    this.loading = true;
    this.productService.getAll(delay).subscribe(
      (products: Product[]) => {
        this._products = products;
        this.loading = false;

        if (false === _.isNull(afterSucces)) {
          afterSucces();
        }
      }
    );
  }

  modalClosingFinished(modal: NgxSmartModalComponent): void {
    console.log('closing finished', modal);
  }

  showModal(modalInfo: ModalInfo): void {
    this.crudModal = modalInfo;
    this.ngxSmartModalService.getModal('myModal').open();
  }

  refreshList(): void {
    console.log('refreshing...');
    this.getProducts(() => console.log('Refresh was successfull.'), 2000);
  }

  modalClose() {
    this.ngxSmartModalService.getModal('myModal').close();
  }

  modalAccept($event) {
    this.crudModal.onAccept();
    // this.modalClose();
  }

  handleEdit($event): void {
    this.sharedData.addMessage(`Product editing - ${$event.id}`);
    this.router.navigate(['/products/edit', +$event.id]);
  }

  handleRemove($event): void {
    const m: ModalInfo = this.modalTypesService.getModal('remove');
    m.onAccept = () => {
      this.modalClose();
      this.productService.remove($event.id).subscribe((response: any) => {

        const m2: ModalInfo = this.modalTypesService.getModal('info');
        m2.message = 'Product deleted.';
        this.sharedData.addMessage('Product deleted.');

        this.showModal(m2);

        m2.onAccept = () => {
          this.modalClose();
        };

      });
    };

    this.showModal(m);

  }
}
