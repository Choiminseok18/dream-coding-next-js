type Props = {
    params: {
        slug: string;
    };
};

export default function DetailPage ({ params }: Props) {

    return (
        <>
            <div className='flex flex-col items-center mt-14'>{params.slug}를 선택하셨습니다.</div>
        </>
    )
}