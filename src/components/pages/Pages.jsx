import s from  "./pages.module.css"
import React from "react";
import {newData} from "../card/refactorData";
import { v4 as id } from 'uuid';

export function Pages({amountItem,setStr, setFirst,setEnd } ) {

    return (
        <ul className={s.list}>
            <li>Last</li>
            {newData.filter((el, i) => i < 5).map((el, i)=> <li
                onClick={(e)=> {
                    setStr(e.target.valueOf().innerText)
                    setFirst(i * amountItem)
                    setEnd((i * amountItem) + amountItem)
                } }
                key={id+Math.random()}>{i + 1}</li>)}


            <li>End</li>
        </ul>
    )
}