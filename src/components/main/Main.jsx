import React from "react";
import {Search} from "../search/Search";
import {List} from "../list/List";
import {useState} from "react";

export function Main({refData, amountItem, str}) {
    const [input, setInput] = useState('')
    return (
        <main>
            <Search setInput={setInput}/>
            <List refData={refData} str={str} amountItem={amountItem} input={input}/>
        </main>
    )
}