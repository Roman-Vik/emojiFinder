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
    console.log(page)

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
    const firstIndexPage = filterCards.length - (filterCards.length - 1)
// последняя страница для slice
    const lastIndexPages = firstIndexPage + amountItem
//Кол-во страниц
    const pagesList = Math.ceil(filterCards.length / amountItem)

    /*======================= PAGES===================================*/
    //с какой страницы отриссоввываются карты
    const startPage = page - 1
    //по какую страницу отриссоввываются карты
    const endPage = startPage + amountItem

    /*======================= PAGES end===================================*/
    return (
        <>
            <Footer
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