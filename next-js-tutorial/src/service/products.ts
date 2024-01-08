import path from "path"
import {promises as fs} from 'fs'

export type Product = {

}

export function getProducts() {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

export async function getProduct(id: string):promise<Product | undefined> {
    return 'shirt';
}