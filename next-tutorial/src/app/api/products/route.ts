import {getProducts} from "@/service/products";
import {NextRequest} from "next/server";

export async function GET(request: Request) {
    const products = await getProducts();
    return NextRequest
}