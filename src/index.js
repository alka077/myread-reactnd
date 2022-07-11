import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

//ReactDOM.render(<App />, document.getElementById('root'))

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<App />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);