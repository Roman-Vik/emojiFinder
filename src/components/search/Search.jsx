import React from "react";
import s from './search.module.css'



export function Search({setInput, input}) {


    return (
        <div className={s.search}>
            <form className='search__form' action="">
                <input  onInput={event => setInput(event.target.value)} value={input}  className={s.search__data} placeholder="Enter text" type="text"/>
            </form>
        </div>
    )
}