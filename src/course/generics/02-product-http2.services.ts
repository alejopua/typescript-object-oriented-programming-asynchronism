import { BaseHttpService } from "./02-base-http.services";
import { Product } from '../app/models/product.model';

export class ProductHttp2Service extends BaseHttpService<Product> {
    otherRequest(){
        this.url
    }
}