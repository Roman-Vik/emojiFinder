import React from "react";
import s from './footer.module.css'
import {Select} from "../select/Select";
import {Pages} from "../pages/Pages";

export function Footer({amountItem, setAmountItem, pagesList}) {
    return (
        <footer>
            <div className={s.container}>
                <Pages pagesList={pagesList} />
                <Select  amountItem={amountItem} setAmountItem={setAmountItem}/>
            </div>
        </footer>
    )
}