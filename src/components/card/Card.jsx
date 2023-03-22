import React from "react";
import s from './card.module.css'

export  function Card(el) {
const {title,symbol, keywords } = el
    return (
        <div className={s.list__item}>
            <p className={s.list__unicode}>{symbol}</p>
            <p className={s.list__name}>{title}</p>
            <p className={s.list__text}>{keywords}</p>
        </div>
    )

}