import axios from 'axios';

// working with promises - async await in typescript
(async ()=>{

    const delay = (time: number) => {
        const promises = new Promise<string>((res)=>{
            setTimeout(() => {
                res('OKEY');
            }, time);
        });
        return promises;
    }

    const getProducts = async(item: number ) => {
        const promise = await axios.get(`https://api.escuelajs.co/api/v1/products/${item}`);
        return promise.data;
    }

    const rta = await delay(2000);
    console.log(rta);
    console.log('---'.repeat(10));
    const rta2 = getProducts(15);
    console.log(rta2);
})();