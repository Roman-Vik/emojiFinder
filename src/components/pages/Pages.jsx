import s from "./pages.module.css"
import React from "react";
import {v4 as id} from 'uuid';
export function Pages({refData, amountItem, setStr, setLastPages, setFirstPages}) {
    return (
        <ul className={s.list}>
            <li>Last</li>
            {refData().filter((el, i) => i < 5).map((el, i) => <li
                onClick={(e) => {
                    setStr(e.target.valueOf().innerText)
                    setFirstPages(i * amountItem)
                    setLastPages((i * amountItem) + amountItem)
                }}
                key={id + Math.random()}>{i + 1}</li>)}
            <li>End</li>
        </ul>
    )
}