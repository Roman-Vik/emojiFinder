import s from "./pages.module.css"
import React from "react";

export function Pages({ setStr,pagination}) {

    return (
        <ul className={s.list}>
            <li >first</li>

            <li >Last</li>
        </ul>
    )
}