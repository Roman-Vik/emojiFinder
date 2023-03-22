import s from "./pages.module.css"
import React from "react";
import {v4 as id} from 'uuid';

export function Pages({pagesList, setPage, page }) {
    const changingListOfPages = []
    for(let i = 1; i <= pagesList; i++){
        changingListOfPages.push(i)
    }

    let startPage = 0;
    let endPage = changingListOfPages.length;
    console.log(page)
    console.log(endPage)
    if (page ===1 || page === 2){
        startPage = 0;
        endPage = 5;
    }
    return (
        <ul className={s.list}>
            <li onClick={()=> setPage((prevValue) => prevValue +1)} >first</li>
            {changingListOfPages.slice(1,5).map((el, i)=> <li onClick={ event => setPage(i + 1)} key={id()}>{el}</li >)}
            <li onClick={()=> setPage((prevValue) => prevValue - 1)} >Last</li>
        </ul>
    )
}