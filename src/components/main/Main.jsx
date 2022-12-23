import React from "react";
import {Search} from "./search/Search";
import {List} from "./list/List";
import {useState} from "react";

export function Main() {
const [input, setInput] = useState('')


    // const inputData = data.filter((el)=> {
    //     el.title.includes(enter.value.trim().toLowerCase()) ||
    //         el.keywords.includes(enter.value.trim().toLowerCase())
    // })
    //  data.forEach((el)=> console.log(el))



    return (
        <main>
            <Search setInput={setInput}/>
            <List input={input} />
        </main>
    )
}