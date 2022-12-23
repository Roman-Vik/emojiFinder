import React from "react";
import s from './footer.module.css'
import {Select} from "../select/Select";
import {Pages} from "../pages/Pages";
export function Footer({setStr}) {
    setStr(111)

    return (
        <footer>
            <div className={s.container}>
            <Pages/>
                <Select/>
            </div>
        </footer>
    )
}