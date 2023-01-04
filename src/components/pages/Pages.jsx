import s from "./pages.module.css"
import React from "react";
import {v4 as id} from 'uuid';

export function Pages({lastPage,pagesList, setPage, setLastPage, page}) {

    setLastPage(page + 5)

    const changingListOfPages = []
    for(let i = 1; i <= pagesList; i++){
        changingListOfPages.push(i)
    }

    return (
        <ul className={s.list}>
            <li onClick={()=> setPage((prevValue) => prevValue +1)} >first</li>
            {changingListOfPages.slice(page, lastPage).map((el, i)=> <li onClick={ event => setPage(i + 1)} key={id()}>{page++}</li >)}
            <li onClick={()=> setPage((prevValue) =>  prevValue === lastPage)}>...</li>
            <li onClick={()=> setPage((prevValue) => prevValue - 1)} >Last</li>
        </ul>
    )
}