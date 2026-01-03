import ProductForm from "./body/ProductForm";
import ProductShow from "./body/ProductShow";
import HeaderSection from "./header/HeaderSection";
import { CartContext } from "./context/CartContext";
import React, { useContext } from "react";
import Cart from "./cart/Cart";
const AllData=()=>{
    const {cartShow}=useContext(CartContext);
    return(
        <>
        <HeaderSection/>
        <ProductForm/>
        <ProductShow/>
        {cartShow && <Cart/>}
        </>
    )
}
export default AllData;