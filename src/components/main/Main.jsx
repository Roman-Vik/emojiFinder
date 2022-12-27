import React from "react";
import {Search} from "../search/Search";
import {List} from "../list/List";

export function Main({ listCard ,input, setInput, refData, amountItem, str}) {
    return (
        <main>
            <Search setInput={setInput}/>
            <List listCard={listCard} refData={refData} str={str} amountItem={amountItem} input={input}/>
        </main>
    )
}