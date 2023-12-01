import axios from 'axios';
import { Product } from './models/product.model';

// working with promises - async await in typescript
// tipando respuestas HTTP con typescript - asincronismo en typescript
(async ()=>{

    const getProducts = async() => {
        // const rta = await axios.get(`https://api.escuelajs.co/api/v1/products`);
        // const data = rta.data as Product[]; // cast
        // return data;

        const { data } = await axios.get<Product[]>(`https://api.escuelajs.co/api/v1/products`);
        return data;
    }

    console.log('---'.repeat(10));
    const product = await getProducts();
    console.log(product.map(item => `${item.id} - ${item.title}`));
})();



// formas de tipar la respuesta

  // async function getProducts(): Promise<Product[]> {
  //   const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  //   return data;
  // }

  // async function getProducts() {
  //   const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
  //   const data = rta.data as Product[];
  //   return data;
  // }

//   async function getProducts() {
//     const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
//     return data;
//   }