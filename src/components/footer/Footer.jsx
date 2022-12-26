import React from "react";
import s from './footer.module.css'
import {Select} from "../select/Select";
import {Pages} from "../pages/Pages";

export function Footer({setStr, amountItem,setAmountItem}) {


    return (
        <footer>
            <div className={s.container}>
            <Pages  amountItem={ amountItem}  setStr={setStr}/>
                <Select  setAmountItem={setAmountItem}   />
            </div>
        </footer>
    )
}