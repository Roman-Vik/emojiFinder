import s from "./pages.module.css"
import React from "react";

export function Pages({ pagination}) {
    return (
        <ul className={s.list}>
            <li onClick={() =>  {
            } }>first</li>
            {pagination()}
        </ul>
    )
}