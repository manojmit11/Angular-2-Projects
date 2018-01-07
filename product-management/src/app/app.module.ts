import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ProductListComponent} from "./product-list/product-list.component";
import {FormsModule} from "@angular/forms";
import {ConvertToSpacesPipe} from "./shared/convert-to-spaces";
import {StarComponent} from "./shared/star.component";
import {ProductService} from "./product-list/product.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from "@angular/router";
import {ProductGuardService} from "./products/product-guard.service";
import { ProdcutModule } from './products/prodcut.module';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [

        {path: 'welcome', component : WelcomeComponent},
        {path: '', redirectTo:'welcome', pathMatch:'full'},
        {path: '**', redirectTo:'welcome', pathMatch:'full'}
      ]
    ),
    ProdcutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
