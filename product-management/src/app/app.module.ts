import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ProductListComponent} from "./product-list/product-list.component";
import {FormsModule} from "@angular/forms";
import {ConvertToSpacesPipe} from "./shared/convert-to-spaces";
import {StarComponent} from "./shared/star.component";
import {ProductService} from "./product-list/product.service";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
