import { ProductHttpService } from "./service/product-http.services";
import { Product } from './models/product.model';

(async() => {

    const productService = ProductHttpService.getInstance();

    console.log('---'.repeat(10));
    console.log('getAll');
    const products = await productService.getAll();
    console.log('products', products);
    console.log('---'.repeat(10));
    console.log('update');

    const productId = products[0].id;
    await productService.update(productId, { title: 'Hello World by alejopua' });

    console.log('---'.repeat(10));
    console.log('Find product by id');
    const product = await productService.findOne(productId);
    console.log('product', product);
    
})();