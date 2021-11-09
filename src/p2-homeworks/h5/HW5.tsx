import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    const containerHWFive = {
        padding: '20px'
    }

    return (
        <div style={containerHWFive}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Routes/>

            </HashRouter>
        </div>
    )
}

export default HW5
