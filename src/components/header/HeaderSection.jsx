import React from "react";
import CartButton from "../cart/CartButton";
const HeaderSection=()=>{

    return(
        <header>
        <div className="bg-dark text-light p-4 fw-bold d-flex justify-content-between">
            <h1 >Shoes Shop</h1>
            <CartButton/>
        </div>
        
        </header>
    )
}
export default HeaderSection;