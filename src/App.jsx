import React from "react";
import {useState} from "react";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {data} from "./store/data";


function App() {
    const [input, setInput] = useState('')
    //select
    const [amountItem, setAmountItem] = useState(12)
    const [firstPages, setFirstPages] = useState(0)
    const [lastPages, setLastPages] = useState(amountItem)
    const [str, setStr] = useState('1')

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
            <Main input={input} setInput={setInput} refData={refData} amountItem={amountItem} firstPages={firstPages} lastPages={lastPages} str={str}/>
            <Footer refData={refData} setFirstPages={setFirstPages} setLastPages={setLastPages} setStr={setStr} amountItem={amountItem}
                    setAmountItem={setAmountItem}/>
        </>
    );
}

export default App;