

import {Injectable} from "@angular/core";
import {IProduct} from "./product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/observable";
import {HttpErrorResponse} from "@angular/common/http";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService{
  private _productUrl='assets/products.json';

  constructor(private _http: HttpClient){

  }

  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._productUrl)
                .do(data => console.log('All:' + JSON.stringify(data)))
                .catch(this.handleError);

  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
}

}
