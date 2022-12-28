import React from "react";
import {Search} from "../search/Search";
import {List} from "../list/List";

export function Main({filterCard  ,input, setInput, refData, amountItem, str}) {
    return (
        <main>
            <Search  filterCard={filterCard}/>
            <List refData={refData} str={str} amountItem={amountItem} input={input}/>
        </main>
    )
}