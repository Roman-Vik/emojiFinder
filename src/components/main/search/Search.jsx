import React from "react";
import s from './search.module.css'



export function Search({setInput}) {


    return (
        <div className={s.search}>
            <form className='search__form' action="">
                <input  onInput={event => setInput(event.target.value)}  className={s.search__data} placeholder="Enter text" type="text"/>
            </form>
        </div>
    )
}