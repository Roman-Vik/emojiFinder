import s from "./pages.module.css"
import React from "react";
import {v4 as id} from 'uuid';

export function Pages({pagesList, setPage}) {

    const changingListOfPages = []
    for(let i = 1; i <= pagesList; i++){
        changingListOfPages.push(i)
    }



    return (
        <ul className={s.list}>
            <li >first</li>
            {changingListOfPages.map((el, i)=> <li onClick={ event => setPage(event.target.valueOf().innerHTML)} key={id()}>{i + 1}</li>)}
            <li >Last</li>
        </ul>
    )
}