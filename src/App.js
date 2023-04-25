import {Route, Routes} from "react-router-dom";

import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Products from "./components/products/Products";

import MainPage from "./pages/MainPage";
import Admin from "./pages/Admin";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";
import Basket from "./pages/Basket";
import ContactsPage from "./pages/ContactsPage";
import CatalogPage from "./pages/CatalogPage";
import MePage from "./pages/MePage";

import {observer} from "mobx-react-lite";

const App = observer(() => {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>  
            <Route path={'/Admin'} element={<Admin/>}/>   
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/contacts'} element={<ContactsPage/>}/>
            <Route path={'/Basket'} element={<Basket/>}/>
            
            <Route path={'/me'} element={<MePage/>}/>
            <Route path={'/login'} element={<AuthPage path='login'/>}/>          
            <Route path={'/register'} element={<AuthPage path='register'/>}/>
            <Route path={'/shop'} element={<CatalogPage type="all"/>}/>

            <Route path="/shop/skirts" element={<div>
                <Catalog/>
                <Products type="skirts"/>
            </div>}/>
            <Route path="/shop/dresses" element={<div>
                <Catalog/>
                <Products type="dresses"/>
            </div>}/>
            <Route path="/shop/pants" element={<div>
                <Catalog/>
                <Products type="pants"/>
            </div>}/>
            <Route path="/shop/shoes" element={<div>
                <Catalog/>
                <Products type="shoes"/>
            </div>}/>
            
            <Route path="/shop/sportswear" element={<div>
                <Catalog/>
                <Products type="sportswear"/>
            </div>}/>
            <Route path="/shop/underwear" element={<div>
                <Catalog/>
                <Products type="underwear"/>
            </div>}/>
            
        </Routes>
        <Footer/>
    </div>
  );
})

export default App;
