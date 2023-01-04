import React from "react";
import {useState, useEffect} from "react";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {data} from "./store/data";

function App() {
    // Фильтр data
    const [refData, setRefData] = useState(data)
    //  Фильтр data по инпуту
    const [filterCards, setFilterCards] = useState(refData)
    //select числа
    const [amountItem, setAmountItem] = useState(12)
    const [listPages, setListPages] = useState([])


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


//первая страница для slice
    const firstIndexPage = filterCards.length - (filterCards.length -1)
    console.log(firstIndexPage)
// последняя страница для slice
    const lastIndexPages = firstIndexPage + amountItem
//Кол-во страниц
    const pagesList = Math.ceil(filterCards.length / amountItem)
// изменяющийся список страниц



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
            <Footer
                amountItem={amountItem}
                setAmountItem={setAmountItem}
                pagesList={pagesList}
            />
            <Header/>
            <Main filterCard={filterCard}
                  refData={filterCards}
            />
            <Footer
                    amountItem={amountItem}
                    setAmountItem={setAmountItem}
                    pagesList={pagesList}
            />
        </>
    );
}

export default App;