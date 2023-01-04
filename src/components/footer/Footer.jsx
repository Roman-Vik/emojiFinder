import React from "react";
import s from './footer.module.css'
import {Select} from "../select/Select";
import {Pages} from "../pages/Pages";

export function Footer({amountItem, setAmountItem,setPage, pagesList, setLastPage, page, lastPage }) {
    return (
        <footer>
            <div className={s.container}>
                <Pages lastPage={lastPage} page={page} setLastPage={setLastPage}  setPage={setPage} pagesList={pagesList} />
                <Select  amountItem={amountItem} setAmountItem={setAmountItem}/>
            </div>
        </footer>
    )
}