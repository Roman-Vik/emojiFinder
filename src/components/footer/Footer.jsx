import React from "react";
import s from './footer.module.css'
import {Select} from "../select/Select";
import {Pages} from "../pages/Pages";

export function Footer({amountItem, setAmountItem, filterCards}) {
    return (
        <footer>
            <div className={s.container}>
                <Pages filterCards={filterCards} />
                <Select  amountItem={amountItem} setAmountItem={setAmountItem}/>
            </div>
        </footer>
    )
}