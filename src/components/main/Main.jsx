import React from "react";
import {Search} from "../search/Search";
import {List} from "../list/List";
import {useState} from "react";

export function Main() {
const [input, setInput] = useState('')

    return (
        <main>
            <Search setInput={setInput}/>
            <List input={input} />
        </main>
    )
}