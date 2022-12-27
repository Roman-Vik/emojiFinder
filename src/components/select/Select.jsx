import s from './select.module.css'
import React from "react";

export function Select({setAmountItem, amountItem}) {
    return (
        <>
            <div className={s.select}>
                <p className={s.select__text}>Per page</p>
                <select
                    value={amountItem}
                    onChange={(event)=> setAmountItem(
                        parseInt(event.target.value)
                    ) }
                >
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                </select>
            </div>
        </>
    )
}