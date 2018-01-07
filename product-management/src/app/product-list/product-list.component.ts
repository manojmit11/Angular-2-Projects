import {Component, OnInit} from '@angular/core';
import {IProduct} from "./product";
import {ProductService} from "./product.service";

/**
 * Created by 2500040 on 1/5/2018.
 */

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: string= 'Products List';
  imageWidth: number=50;
  imageMargin: number=2;
  showImage: boolean=false;
  buttonText: string="Show Image";
  errorMessage: string;

  _listFilter:string;

  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts=this.listFilter? this.performFilter(this.listFilter):this.products;

  }

  filteredProducts: IProduct[];
  products : IProduct[];

    constructor(private _productService: ProductService){
      this.listFilter="";
    }

    toggleImage(): void{
    this.showImage= !this.showImage;
     this.buttonText= this.showImage ? "Hide Image":"Show Image";
   }

   ngOnInit():void{

     this._productService.getProducts()
       .subscribe(products => {
           this.products=products;
           this.filteredProducts=products;
         },
             error => this.errorMessage=<any>error );
   }

   performFilter(filterBy:string):IProduct[]{
     filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
     return this.products.filter((product: IProduct) =>
             product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
   }

   onRatingClicked(message:string):void{
     console.log(message +' ' +'from product-list component');
   }

}
