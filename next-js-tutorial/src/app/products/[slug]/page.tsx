import notFound from "@/app/products/not-found";
import {getProduct, getProducts} from "@/service/products";

type Props = {
    params: {
        slug: string;
    };
};

export function generateMetadata({ params }: Props) {
    return {
        title: `제품의 이름: ${params.slug}`
    }
}

export async default function ProductPage ({ params : {slug}}: Props) {
    if (slug == 'nothing') {
        notFound();
    }
    const product = getProduct(slug);
    
    return (
        <>
            <h1>{product}제품 설명 페이지</h1>
        </>
    )
}

export async function generateStaticParams() {
    // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄 것임 (SSG)
    const products = await getProducts();
    return products.map((product) => ({
        slug: product.id,
    }))
}