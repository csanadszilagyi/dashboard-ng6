import { CurrencyPipe } from '@angular/common';

export class Product {
    constructor(public Id: number,
                public Name: string,
                public Price: number) {}

    get PriceFormatted(): string {
        return new CurrencyPipe('hu')
            .transform(this.Price, 'HUF', 'Ft', '1.0-0');
    }
}
