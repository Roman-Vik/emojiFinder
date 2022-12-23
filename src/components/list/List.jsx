import React from "react";
import {Card} from "../card/Card";
import s from './list.module.css'
import { v4 as id } from 'uuid';
import {newData} from "../card/refactorData";

export function List ({input}){

    return (
        <section>
                <div className={s.list}>
                    <div className={s.list__wrapper}></div>
                    <div className={s.container}>
                        {/*{newData.filter( el=>*/}
                        {/*    el.title.includes(input.trim().toLowerCase()) || el.keywords.includes(input.trim().toLowerCase())).map(*/}
                        {/*        el=>  <Card key={id()} {...el} />*/}
                        {/*)}*/}
                    </div>

                </div>
        </section>
    )
}