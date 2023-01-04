import s from "./pages.module.css"

import React from "react";
import {v4 as id} from 'uuid';

export function Pages({pagesList}) {

    const changingListOfPages = []
    for(let i = 1; i <= pagesList; i++){
        changingListOfPages.push(i)
    }

    console.log(changingListOfPages)





    return (
        <ul className={s.list}>
            <li >first</li>
            {changingListOfPages.map(el=> <li key={id()}>{el}</li>)}
            <li >Last</li>
        </ul>
    )
}