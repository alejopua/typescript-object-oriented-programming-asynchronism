import { faker } from '@faker-js/faker';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService{
    private static instance: ProductMemoryService;
    private products: Product[] = [];

    private constructor() {
      // Constructor privado para evitar instanciación externa
    }

    static getInstance(): ProductMemoryService {
        if (!ProductMemoryService.instance) {
            ProductMemoryService.instance = new ProductMemoryService();
        }
        return ProductMemoryService.instance;
    }
    
    getAll(): Product[] {
        return this.products;
    }

    create (item: CreateProductDto): Product {
        const newProduct = {
            ...item,
            id: faker.number.int(),
            category: {
                id: item.categoryId,
                name: faker.commerce.department(),
                image: faker.image.url(),
            }
        }
        return this.add(newProduct);
    }

    add (product: Product){
        this.products.push(product);
        return product;
    }

    update (id: Product['id'], changes: UpdateProductDto): Product {
        const index = this.products.findIndex((item)=> item.id === id);
        const prevData = this.products[index];
        this.products[index] = {
            ...prevData,
            ...changes
        }
        return this.products[index];
    }

    findOne (id: Product['id']) {
        return this.products.find(item => item.id === id);
    }

}


//CRUD