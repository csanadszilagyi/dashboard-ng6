import { Observable, of, from} from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../Product';
import { Injectable } from '@angular/core';
import _ from 'lodash';

const PRODUCTS: Product[] = [
    new Product(0, 'abcd', 1800),
    new Product(1, 'edfg', 4000),
    new Product(2, 'ijkl', 750),
    new Product(3, 'mnop', 2100),
    new Product(4, 'qrst', 6490),
    new Product(5, 'uvwx', 65),
    new Product(6, 'yz00', 1800),
    new Product(7, 'abcd-02x', 4000),
    new Product(8, 'edfg-20x', 750),
    new Product(9, 'ijkl-03x', 2100),
    new Product(10, 'mnop-30x', 6490),
    new Product(11, 'qrst-04x', 65)
];

@Injectable({
  providedIn: 'root',
})
export class ProductService {

    private _products = PRODUCTS; // _.cloneDeep(PRODUCTS); : Product[] = [];

    constructor() {
       console.log('Product Service Initialized');
       // this._products = JSON.parse(JSON.stringify(this.PRODUCTS));
    }

    get(id: number, delay: number = 0): Observable<Product> {
        return Observable.create( (observer) => {

                setTimeout( () => {
                    const p = _.find(this._products, (product: Product) => product.Id === id);
                    if (p) {
                        observer.next({status: 200, product: p});
                        observer.complete();
                    }

                    observer.error({status: 404, message: 'Product not found.'});

                }, delay);
                // observer.complete();
            });
    }

    remove(id: number): Observable<number> {
        return Observable.create( (observer) => {
            console.log('create lefut');
                setTimeout( () => {
                    _.remove(this._products, (p: Product) => p.Id === id);
                    observer.next({status: 200, id: id});
                    observer.complete();
                }, 1000);
                // observer.complete();
            });
    }

    getAll(sleep: number = 1000): Observable<Product[]> {
        console.log('getting all products...');
        return of(this._products)
          .pipe(
              delay(sleep)
          );
    }
}
