import React from "react";
import s from './header.module.css'

export function Header() {
    return(
        <header>
            <div className={s.hWraper}>
                <h1 className={s.hLine}>Emoji Finder</h1>
                <h3 className={s.hWraper__text}>Find emoji by keywords</h3>
            </div>
        </header>
    )
}