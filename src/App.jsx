import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainApplication from "./MainApplication.jsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<MainApplication/>}/>
            </Routes>
        </Router>
    )
}

export default App
