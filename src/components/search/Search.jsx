import React from "react";
import s from './search.module.css'

export function Search({filterCard}) {


    return (
        <div className={s.search}>
            <form className='search__form' action="">
                <input
                        onChange={filterCard}
                     className={s.search__data} placeholder="Enter text" type="text"/>
            </form>
        </div>
    )
}