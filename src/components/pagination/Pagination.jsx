import React, {useState} from "react";
import s from './pagination.module.css'
import {newData} from "../../main/list/card/refactorData";
//import { v4 as id } from 'uuid';

const pagesCount = Math.ceil(data.length /carts)
const page = 1
const carts = 12


function display (data, rowPerPage, page){
    /*кол-во страниц*/
    const pagesCount = Math.ceil(data.length / rowPerPage)
    /*первая стр*/
    const start = rowPerPage * page;
    /*последняя стр*/
    const end = start + rowPerPage;
    /*вырезать элем*/
    const paginatedData = data.slice(start, end)
}
display(newData, carts, page )





export function Pagination() {

    return (
        <>
            <div className={s.container}>
                <ul className={s.list}>
                    <li>First</li>
                    {}
                    <li>Last</li>
                </ul>
                <div className={s.str}>
                    <p className={s.text}>Per Page</p>
                    <select className={s.select} name="select">
                        <option value="value1">12</option>
                        <option value="value2"> 24</option>
                        <option value="value3"> 36</option>
                    </select>
                </div>
            </div>
        </>
    )
}