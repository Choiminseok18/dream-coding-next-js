import os from 'os';
import Counter from '../components/Counter'


export default function Home () {
    console.log(os.hostname());


    return (
        <>
            <h1>홈페이지다!</h1>
            <Counter></Counter>
        </>
    )
}