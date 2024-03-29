import notFound from "@/app/products/not-found";

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

export default function PantsPage ({ params }: Props) {
    if (params.slug == 'nothing') {
        notFound();
    }
    
    return (
        <>
            <h1>{params.slug}제품 설명 페이지</h1>
        </>
    )
}

export function generateStaticParams() {
    const products = ['pants', 'skirt'];
    return products.map(product => ({
        slug: product,
    }))
}