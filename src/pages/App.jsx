import React from "react";
import { Navbar, Footer } from "../components";
import Router from "../config/Router";

const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <Router />
            <Footer></Footer>
        </>
    );
};

export default App;
