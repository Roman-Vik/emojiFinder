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
    const [page, setPage] = useState(1)
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
    /*======================= PAGES MAIN===================================*/
    //с какой страницы отриссоввываются карты
    const startPage = page * amountItem - amountItem
    //по какую страницу отриссоввываются карты
    const endPage = page * amountItem
    //Кол-во страниц
    const pagesList = Math.ceil(filterCards.length / amountItem)
    /*======================= PAGES MAIN end===================================*/


    /*======================= PAGES FOOTER===================================*/




    /*======================= PAGES FOOTER end===================================*/
    return (
        <>
            <Footer
                page={page}
                amountItem={amountItem}
                setAmountItem={setAmountItem}
                pagesList={pagesList}
                setPage={setPage}
            />
            <Header/>
            <Main startPage={startPage}
                  endPage={endPage}
                  filterCard={filterCard}
                  refData={filterCards}
            />
        </>
    );
}
export default App;