import React, {useState} from 'react'

const Product = () => {

    const [tee, setTee] = useState("")

 function handleSizeButton(e) {
    e.preventDefault();
    const value = e.target.value
    if (value !== null) {
        setTee({...tee, value })
    } else {
        return(null);
    }
 }

 let starSign = <span className="starSign">*</span>
    return (
        <div className="productPage">
            <div className="left-column">
                <img src="https://firebasestorage.googleapis.com/v0/b/be-informed-nz.appspot.com/o/images%2Fclassic-tee.jpg?alt=media&token=11df03b3-ec9c-4e29-a7a9-718520a1e469"></img>
            </div>
            <div className="right-column">
                <h2>Classic Tee</h2>
                <h3>$75.00</h3>
                <p>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="sizeButton">
                    <h3>SIZE{starSign}</h3>
                    <button value="small" onClick={handleSizeButton}>S</button>
                    <button value="medium" onClick={handleSizeButton}>M</button>
                    <button value="large" onClick={handleSizeButton}>L</button>
                </div>
                <div className="addButton">
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Product
