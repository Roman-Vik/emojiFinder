import React from "react";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {Task13} from "./task13/Task13";

function App() {
    //select
        const [amountItem, setAmountItem] = React.useState(12)
        const [first, setFirst] = React.useState(0)
        const [end, setEnd] = React.useState(amountItem)
        const [str, setStr] = React.useState('1')

    return (
        <>
            <Header/>
            <Main  amountItem={amountItem} first={first} end={end} str={str} />
            <Footer setFirst={setFirst} setEnd={setEnd} setStr={setStr} amountItem={amountItem} setAmountItem={setAmountItem} />
            <Task13/>
        </>
    );
}

export default App;