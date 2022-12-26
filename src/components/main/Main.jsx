import React from "react";
import {Search} from "../search/Search";
import {List} from "../list/List";
import {useState} from "react";

export function Main({amountItem, str}) {
    const [input, setInput] = useState('')
    return (
        <main>
            <Search setInput={setInput}/>
            <List str={str} amountItem={amountItem} input={input}/>
        </main>
    )
}