import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "/src/layout/Layout"
import Home from "../src/Pages/Home"
import AboutUs from "../src/Pages/AboutUs"
import Products from "../src/Pages/Products"
import SingleProduct from './Pages/SingleProduct'
import { ProductProvider } from './Contexts/ProductContext'
function App() {
  
  return (
    <>
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={Layout}>
            <Route path="/" Component={Home}/>
            <Route path="/AboutUs" Component={AboutUs}/>
            <Route path="/Products" Component={Products}/>
            <Route path="Products/:id" Component={SingleProduct}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
    </>
  )
}

export default App
