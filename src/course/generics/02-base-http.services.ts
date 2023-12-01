import axios from 'axios';
import { Category } from '../app/models/category.model';
import { Product } from '../app/models/product.model';

export class BaseHttpService<TypeClass> {
    constructor (private url:string) {}

    async getAll() {
        const { data } = await axios.get<TypeClass[]>(this.url);
        return data;
    }
} 

(async () => {
    const url1 = 'https://api.escuelajs.co/api/v1/products';
    const productService = new BaseHttpService<Product>(url1);
    const rta = await productService.getAll();
    console.log(rta);
    
    const url2 = 'https://api.escuelajs.co/api/v1/categories'
    const productService2 = await new BaseHttpService<Category>(url2);
    const rta2 = await productService2.getAll();
    console.log(rta2);
})();
