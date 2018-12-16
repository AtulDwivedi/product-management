import { Component, OnInit } from '@angular/core'
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    constructor(private productService: ProductService) {
        this.listFilter = '';
    }

    pageTitle: string = "Product List";
    imageWidth: number = 30;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    errorMessage: any;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = products;
            },
            error => this.errorMessage = <any>error
        );

    }

    onNotify(message: string): void {
        this.pageTitle = "Product List: " + message;
    }


    filteredProducts: IProduct[];
    products: IProduct[];
}