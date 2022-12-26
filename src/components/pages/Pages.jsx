import s from  "./pages.module.css"
import React from "react";
import {newData} from "../card/refactorData";
import { v4 as id } from 'uuid';

export function Pages({amountItem,setStr}) {   console.log( amountItem)

    return (
        <ul className={s.list}>
            <li>Last</li>
            {newData.filter((el, i) => i < 5).map((el, i)=> <li
                onClick={(e)=>  setStr({
                        pages:e.target.valueOf().innerText,
                        first: i * amountItem,
                        end: (i * amountItem) + amountItem,
                    })}
                key={id+Math.random()}>{i + 1}</li>)}
            <li>End</li>
        </ul>
    )
}