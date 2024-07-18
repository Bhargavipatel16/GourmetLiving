import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from "./Components/Pages/Home"
import Footer from "./Components/Pages/Footer"
import Navbar from './Components/Pages/Navbar'
import Store from './Components/Slice/Store'
import Bestseller from './Components/Pages/Bestseller'
import Contactus from './Components/Pages/Contactus'
import Singlepro from './Components/Pages/Singlepro'
import Addtocart from './Components/Pages/Addtocart'


const App = () => {
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="bestseller" element={<Bestseller />} />
            <Route path="contactus" element={<Contactus />} />
            <Route path="/bestseller/demo/:id" element={<Singlepro />} />
            <Route path="demo/:id" element={<Singlepro />} />
            <Route path="Addtocart" element={<Addtocart />} />
           
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
