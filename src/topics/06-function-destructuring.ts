export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia',
    price: 150.0
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 250.0
}

//Calculo de impuestos
interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//Desestructuración de objetos
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    let total = 0;

    const {tax, products} = options;

    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    tax,
    products: shoppingCart,
});

const [total, taxAmount] = result;

//Desestructuración de arreglos
console.log('Total', total);
console.log('Tax', taxAmount);
