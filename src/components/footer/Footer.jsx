import React from "react";
import s from './footer.module.css'
import {Select} from "../select/Select";
import {Pages} from "../pages/Pages";

export function Footer({amountItem, setAmountItem, setPage, pagesList, page,}) {
    return (
        <footer>
            <div className={s.container}>
                <Pages page={page} setPage={setPage} pagesList={pagesList}/>
                <Select amountItem={amountItem} setAmountItem={setAmountItem}/>
            </div>
        </footer>
    )
}