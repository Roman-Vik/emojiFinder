import React from "react";
import {Card} from "../card/Card";
import {v4 as id} from 'uuid';
import s from './list.module.css'

export const List = ({refData, startPage, endPage}) =>
    (
        <section>
            <div className={s.list}>
                <div className={s.list__wrapper}></div>
                <div className={s.container}>
                    {refData.slice(startPage, endPage).map(el => <Card key={id()} {...el}/>)}
                </div>
            </div>
        </section>
    )

