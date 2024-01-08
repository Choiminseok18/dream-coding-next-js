import Link from "next/link";


export default function HomePage () {


    return (
        <div className='flex flex-col items-center mt-14'>
            <h1 className='text-2xl pb-3'>Welcome to Tre Dolce</h1>
            <Link href='/vending-machine'>시작하기</Link>
        </div>
    )
}