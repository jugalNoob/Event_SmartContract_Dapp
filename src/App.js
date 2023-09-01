import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Form from './page/Form';
import Login from './page/Login';
import Mint from "./page/Mint"
import GetTick  from './page/GetTick';

function App() {
  return (
    <div>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/form" element={<Form />} />
<Route path="/login" element={<Login />} />
<Route path="/mint" element={<Mint/>}/>
<Route path="/ticket" element={<GetTick/>}/>
</Routes>

    </div>
  )
}

export default App
