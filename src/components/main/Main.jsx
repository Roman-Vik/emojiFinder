import React from "react";
import {Search} from "../search/Search";
import {List} from "../list/List";

export function Main({filterCard, refData,}) {
    return (
        <main>
            <Search  filterCard={filterCard}/>
            <List refData={refData}/>
        </main>
    )
}