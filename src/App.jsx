import React from "react";
import {v4 as id} from 'uuid';
import {useState} from "react";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {data} from "./store/data";
import {Card} from "./components/card/Card";


function App() {
    const [input, setInput] = useState('')
    //select
    const [amountItem, setAmountItem] = useState(12)
    const [firstPages, setFirstPages] = useState(0)
    const [lastPages, setLastPages] = useState(amountItem)
    const [str, setStr] = useState('1')
    const [pageNav, setPageNav] = useState(1)



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


    /*=============Отрисовка Card в List==*/
    function listCard () {
        return (
            <>
                {refData().filter(el => el.title.includes(input.trim().toLowerCase()) || el.keywords.includes(input.trim().toLowerCase())).map(el => <Card key={id()} {...el}/>)}
            </>
        )
    }
/*===============================*/
    {/*   { refData()
                        .slice((+str * amountItem - amountItem), ((+str * amountItem - amountItem) + amountItem))
                        .filter(el => el.title.includes(input.trim().toLowerCase()) || el.keywords.includes(input.trim().toLowerCase())).map(el =>
                            <Card key={id()} {...el} />)
                    }*/}
/*===============================*/
 function pagination() {
     return (
         <>
             {
                 refData().filter((el, index, arr) => index <= (arr.length / (amountItem * 12) )).map((el, i) => <li
                     onClick={(e) => {
                         setStr(e.target.valueOf().innerText)
                         setFirstPages(i * amountItem)
                         setLastPages((i * amountItem) + amountItem)
                     }}
                     key={id()}>{i + 1}</li>)
             }
         </>)

 }
pagination()






    return (
        <>
            <Header/>
            <Main listCard={listCard} input={input} setInput={setInput} refData={refData} amountItem={amountItem} firstPages={firstPages} lastPages={lastPages} str={str}/>
            <Footer pagination={pagination} setPageNav={setPageNav} refData={refData} setFirstPages={setFirstPages} setLastPages={setLastPages} setStr={setStr} amountItem={amountItem}
                    setAmountItem={setAmountItem}/>
        </>
    );
}

export default App;