import React from "react";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {data} from "./store/data";


function App() {
    //select
    const [amountItem, setAmountItem] = React.useState(12)
    const [first, setFirst] = React.useState(0)
    const [end, setEnd] = React.useState(amountItem)
    const [str, setStr] = React.useState('1')

    function refData() {
        return data.map((el) => {
            return {
                ...el,
                keywords: el.keywords
                    .split(' ')
                    .filter((item, i, arr) => arr.indexOf(item) === i)
                    .join(' '),
            };
        });
    }

    return (
        <>
            <Header/>
            <Main refData={refData} amountItem={amountItem} first={first} end={end} str={str}/>
            <Footer refData={refData} setFirst={setFirst} setEnd={setEnd} setStr={setStr} amountItem={amountItem}
                    setAmountItem={setAmountItem}/>
        </>
    );
}

export default App;