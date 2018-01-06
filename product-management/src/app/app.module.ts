import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ProductListComponent} from "./product-list/product-list.component";
import {FormsModule} from "@angular/forms";
import {ConvertToSpacesPipe} from "./shared/convert-to-spaces";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
