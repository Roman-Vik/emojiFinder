import React from "react";
import {Search} from "../search/Search";
import {List} from "../list/List";

export function Main({ input, setInput, refData, amountItem, str}) {
    return (
        <main>
            <Search setInput={setInput}/>
            <List refData={refData} str={str} amountItem={amountItem} input={input}/>
        </main>
    )
}