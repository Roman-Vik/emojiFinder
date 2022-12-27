import React from "react";
import {Card} from "../card/Card";
import s from './list.module.css'
import {v4 as id} from 'uuid';


export function List({refData, input, amountItem, str}) {
    return (
        <section>
            <div className={s.list}>
                <div className={s.list__wrapper}></div>
                <div className={s.container}>
                    { refData()
                        .slice((+str * amountItem - amountItem), ((+str * amountItem - amountItem) + amountItem))
                        .filter(el => el.title.includes(input.trim().toLowerCase()) || el.keywords.includes(input.trim().toLowerCase())).map(el =>
                            <Card key={id()} {...el} />)
                    }
                </div>
            </div>
        </section>
    )
}
