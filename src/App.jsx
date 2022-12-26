import React from "react";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {Task13} from "./task13/Task13";

function App() {
        const [amountItem, setAmountItem] = React.useState(12)
        const  [x, setX] = React.useState(amountItem)


        const [str, setStr] = React.useState({pages: '1', first: 0, end: 12})


    return (

        <>
            <Header/>
            <Main str={str} />
            <Footer setStr={setStr} amountItem={amountItem} setAmountItem={setAmountItem} />
            <Task13/>
        </>
    );
}

export default App;