import React from "react";
import {Card} from "../card/Card";
import s from './list.module.css'
import { v4 as id } from 'uuid';
import {newData} from "../card/refactorData";

export function List ({str, input}){
    return (
        <section>
                <div className={s.list}>
                    <div className={s.list__wrapper}></div>
                    <div className={s.container}>
                        {
                            newData.filter((elem, index)=>{
                            return   index >= str.first  && index < str.end
                        }).filter(el=> el.title.includes(input.trim().toLowerCase()) || el.keywords.includes(input.trim().toLowerCase())).map((el) => {
                            return <Card key={id()} {...el} />
                        } )}
                    </div>

                </div>
        </section>
    )
}