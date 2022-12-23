import s from './select.module.css'
import React from "react";
export function Select() {
    return (
        <>
            <div className={s.select}>
                <p className={s.select__text}>Per page</p>
                <select name={s.select__pages}>
                    <option value="value1" selected>12</option>
                    <option value="value2">24</option>
                    <option value="value3">36</option>
                </select>
            </div>
        </>
    )
}