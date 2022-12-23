import React from "react";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {Task13} from "./task13/Task13";

function App() {
    const [str, setStr] = React.useState(null)

    return (
        <>
            <Header/>
            <Main/>
            <Footer setStr={setStr} />
            <Task13/>
        </>
    );
}

export default App;