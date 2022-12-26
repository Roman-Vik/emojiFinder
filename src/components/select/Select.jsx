import s from './select.module.css'
import React from "react";
export function Select({str, setStr}) {
    const [myValue, setMyValue] = React.useState("");
    // console.log(str)
    return (
        <>
            <div className={s.select}>
                <p className={s.select__text}>Per page</p>
                <select
                    onChange={(e) => setMyValue(e.target.value)}
                    defaultValue={myValue}  className={s.select__pages}>
                    <option value="value1" selected>12</option>
                    <option value="value2">24</option>
                    <option value="value3">48</option>
                </select>
            </div>
        </>
    )
}