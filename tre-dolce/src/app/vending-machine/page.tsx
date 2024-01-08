import Link from "next/link";
import {useQuery} from "@tanstack/react-query";
import {lightningcss} from "tailwindcss/src/oxide/cli/build/deps";

export default function MenuPage () {
    // const {
    //     isLoading,
    //     error,
    //     data: menu,
    // } = useQuery({
    //     queryKey: ["menu"],
    //     queryFn: async () => {
    //         console.log('fetching.....');
    //         return await fetch(`data/menu.json`).then((res) => res.json());
    //     },
    // });

    // if(isLoading) {
    //     return <div>loading...</div>
    // }
    //
    // if(error) {
    //     return <div>error</div>
    // }

    return (
        <div className='flex flex-col items-center mt-14'>
            <h1 className='text-2xl pb-3'>메뉴를 선택해주세요</h1>
            <ul className='flex flex-col'>
                {/*{menu.map((item) => {*/}
                {/*    <Link href={item.link}>{item.name}</Link>*/}
                {/*})}*/}
                <Link href='/vending-machine/americano'>아메리카노</Link>
                <Link href='/vending-machine/cafelatte'>카페라떼</Link>
                <Link href='/vending-machine/jujube-ginger-tea'>대추 생강차</Link>
                <Link href='/vending-machine/mango-smoothie'>망고 스무디</Link>
                <Link href='/vending-machine/red-bean-shaved-ice'>팥빙수</Link>
            </ul>
        </div>
    )
}