import React from "react";
import s from './list.module.css'



export function List({listCard}) {
    return (
        <section>
            <div className={s.list}>
                <div className={s.list__wrapper}></div>
                <div className={s.container}>
                    {listCard()}
                </div>
            </div>
        </section>
    )
}
