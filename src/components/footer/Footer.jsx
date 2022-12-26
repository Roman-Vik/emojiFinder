import React from "react";
import s from './footer.module.css'
import {Select} from "../select/Select";
import {Pages} from "../pages/Pages";

export function Footer({str ,setStr}) {


    return (
        <footer>
            <div className={s.container}>
            <Pages setStr={setStr}/>
                <Select  setStr={setStr}  str={str} />
            </div>
        </footer>
    )
}