import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "../product-list/product-list.component";
import {StarComponent} from "../shared/star.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ConvertToSpacesPipe} from "../shared/convert-to-spaces";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ProductGuardService} from "./product-guard.service";
import {ProductService} from "../product-list/product.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'products' ,component: ProductListComponent},
      { path: 'products/:id',
        canActivate: [ProductGuardService],
        component : ProductDetailComponent
      },
      ]

    )
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  providers:[
    ProductService,
    ProductGuardService
  ]
})
export class ProdcutModule { }
