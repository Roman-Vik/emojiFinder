import s from "./pages.module.css"
import React from "react";
import {v4 as id} from 'uuid';


const pagination = () => {
    const pageNum = []
    for(let i = 0; i <  Math.ceil(1820/48) ; i++){
        //общее колличесво карт делим на колличество отображения на странице
        pageNum.push[i]
    }



    return (
        <>
        <ul>
            <li>first</li>

            <li>last</li>
        </ul>
        </>
    )
}


export function Pages({setPageNav, refData, amountItem, setStr, setLastPages, setFirstPages}) {

console.log(amountItem)

    return (
        <ul className={s.list}>
            <li>Last</li>
            {refData().filter((el, index, arr) => index <= (arr.length / (amountItem * 12) )).map((el, i) => <li
                onClick={(e) => {
                    setStr(e.target.valueOf().innerText)
                    setFirstPages(i * amountItem)
                    setLastPages((i * amountItem) + amountItem)
                }}
                key={id()}>{i + 1}</li>)}


            {/*{refData().slice(0, 5).map((el, i) => <li*/}
            {/*    onClick={(e) => {*/}
            {/*        setStr(e.target.valueOf().innerText)*/}
            {/*        setFirstPages(i * amountItem)*/}
            {/*        setLastPages((i * amountItem) + amountItem)*/}
            {/*    }}*/}
            {/*    key={id()}>{i + 1}</li>)}*/}
            <li>End</li>
        </ul>
    )
}