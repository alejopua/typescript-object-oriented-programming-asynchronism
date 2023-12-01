import { ProductMemoryService } from "./service/product-memory.services";

const productService = new ProductMemoryService();
productService.create({
    title: 'Product 1',
    price: 100,
    description: 'Product 1 description',
    categoryId: 1,
    images: []
});

const products = productService.getAll();
const productId = products[0].id;
console.log('products', productId);
const productUpdated = productService.update(productId, {
    title: 'Product 1 updated'
});

console.log('productUpdated', productUpdated);