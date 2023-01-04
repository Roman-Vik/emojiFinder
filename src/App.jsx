import React from "react";
import {useState, useEffect} from "react";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {data} from "./store/data";

function App() {
    const [refData, setRefData] = useState(data)
    const [filterCards, setFilterCards] = useState(refData)
    //select
    const [amountItem, setAmountItem] = useState(12)
    const [firstPages, setFirstPages] = useState(0)
    const [lastPages, setLastPages] = useState(amountItem)
    const [str, setStr] = useState(1)
    const [pageNav, setPageNav] = useState(1)


    useEffect(() => {
        let refactorListCard = refData.map((el) => ({
            ...el,
            keywords: el.keywords
                .split(' ')
                .filter((item, i, arr) => arr.indexOf(item) === i)
                .join(' '),
        }));
        setRefData(refactorListCard)
    }, []);

    /*===========Фильтр карт по инпуту===============*/
    const filterCard = (event) => {
        const filterCards = refData.filter(el => el.title.includes(event.target.value.trim().toLowerCase()) || el.keywords.includes(event.target.value.trim().toLowerCase()))
        setFilterCards(filterCards)

        return filterCards
    }

//первый элемент на странице
    const firstIndexPage = 0
//последний элемент
    const lastIndexPages = filterCards.length
//Кол-во страниц
    const pagesList = Math.ceil(lastIndexPages / amountItem)
//Вырезать с первой страницы по select
    const pagesSliceInSelect = firstIndexPage + (firstIndexPage + amountItem)


    // function pagination() {
    //     return (
    //         <>
    //             {
    //                 refData().filter((el, index, arr) => index <= (arr.length / (amountItem * 12) )).map((el, i) => <li
    //                     onClick={(e) => {
    //                         setStr(e.target.valueOf().innerText)
    //                         setFirstPages(i * amountItem)
    //                         setLastPages((i * amountItem) + amountItem)
    //                     }}
    //                     key={id()}>{i + 1}</li>)
    //             }
    //         </>)
    // }


    return (
        <>
            <Footer filterCards={filterCards}
                    amountItem={amountItem}
                    setAmountItem={setAmountItem}/>
            <Header/>
            <Main filterCard={filterCard}
                  refData={filterCards}
                  amountItem={amountItem}
                  firstPages={firstPages}
                  str={str}/>
            <Footer filterCards={filterCards}
                    amountItem={amountItem}
                    setAmountItem={setAmountItem}/>
        </>
    );
}

export default App;