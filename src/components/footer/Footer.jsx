import React from "react";
import s from './footer.module.css'
import {Select} from "../select/Select";
import {Pages} from "../pages/Pages";

export function Footer({setFirst, setEnd, setStr, amountItem,setAmountItem}) {
    return (
        <footer>
            <div className={s.container}>
            <Pages  amountItem={ amountItem}  setFirst={setFirst} setEnd={setEnd}  setStr={setStr}/>
                <Select amountItem={amountItem} setAmountItem={setAmountItem} />
            </div>
        </footer>
    )
}