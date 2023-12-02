import axios from 'axios';
import { Category } from '../app/models/category.model';
import { Product } from '../app/models/product.model';
import { UpdateProductDto } from '../app/dtos/product.dto';

export class BaseHttpService<TypeClass> {
    constructor (protected url:string) {}

    async getAll() {
        const { data } = await axios.get<TypeClass[]>(this.url);
        return data;
    }

    async update<ID, DTO>(id: ID, changes: DTO) {
        const { data } = await axios.put(`${this.url}/${id}`, changes);
        return data;
    }
} 

(async () => {
    const url1 = 'https://api.escuelajs.co/api/v1/products';
    const productService = new BaseHttpService<Product>(url1);
    const rta = await productService.getAll();
    console.log(rta);
    productService.update<Product['id'], UpdateProductDto>(1, { title: 'new name' })
    
    const url2 = 'https://api.escuelajs.co/api/v1/categories'
    const productService2 = await new BaseHttpService<Category>(url2);
    const rta2 = await productService2.getAll();
    console.log(rta2);
})();
