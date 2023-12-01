import axios from 'axios';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { ProductService } from '../models/product-service.model';

export class ProductHttpService implements ProductService {
    static instance: ProductHttpService;
    private baseUrl = 'https://api.escuelajs.co/api/v1/products';

    private constructor() {}
    
    static getInstance(): ProductHttpService {
        if (!ProductHttpService.instance) {
            ProductHttpService.instance = new ProductHttpService();
        }
        return ProductHttpService.instance;
    }

    async getAll() {
        const { data } = await axios.get<Product[]>(this.baseUrl);
        return data;
    }

    async update(id: Product['id'], changes: UpdateProductDto) {
        const { data } = await axios.put(`${this.baseUrl}/${id}`, changes);
        return data;
    }

    async create(dto: CreateProductDto) {
        const { data } = await axios.post(this.baseUrl, dto);
        return data;
    }

    async findOne(id: Product['id']) {
        const { data } = await axios.get(`${this.baseUrl}/${id}`);
        return data;
    }

}