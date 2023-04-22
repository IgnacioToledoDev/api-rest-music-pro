export interface Product {
    series: string,
    code: string,
    name: string,
    brand: string,
    image: string,
    description?: string,
    amount?: number,
    price: number,
    stock?: number
};