import React from "react";
import s from './footer.module.css'
import {Select} from "../select/Select";
import {Pages} from "../pages/Pages";

export function Footer({ refData, setLastPages, setFirstPages, setStr, amountItem, setAmountItem}) {
    return (
        <footer>
            <div className={s.container}>
                <Pages refData={refData} amountItem={amountItem} setFirstPages={setFirstPages} setLastPages={setLastPages} setStr={setStr}/>
                <Select amountItem={amountItem} setAmountItem={setAmountItem}/>
            </div>
        </footer>
    )
}