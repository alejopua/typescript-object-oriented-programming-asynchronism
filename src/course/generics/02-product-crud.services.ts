import { UpdateProductDto } from "../app/dtos/product.dto";
import { Product } from "../app/models/product.model";
import { BaseHttpService } from "./02-base-http.services";
import { ProductHttp2Service } from "./02-product-http2.services";

export class ProductCrudService {
    private url = 'https://api.escuelajs.co/api/v1/products';
    private http = new ProductHttp2Service(this.url);

    async update(id: Product['id'], dto: UpdateProductDto){
        return this.http.update(id, dto)
    } 
}