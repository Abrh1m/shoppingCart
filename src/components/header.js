import React, {useState} from 'react';
import {motion, Variants} from 'framer-motion'

const variants = {
    open : {
        scale: 2,
        color: "black"
    }, 
    close: {
        scale: 1
    }
}

const cart = {
    close: {
        y: "-100vh",
        opacity: 0
    }, 
    open: {
        y: 0,
        opacity: 1
    }
}



const Header = () => {
    const [visible, setVisible] = useState(false)


    let price = <span className="Price"><h4>$75.00</h4></span>
    return (
        <div className="header">
     
            <div className="tab">
            <motion.button className="cartButton" 
            variants={variants}
            initial={false}
            animate={visible ? "open" : "close"}
            
            onClick={() => setVisible(state => !state)}>My cart</motion.button>
            </div>
           <motion.div className="shoppingCart"
           variants={cart}
            initial={false}
            animate={visible ? "open" : "close"}
        
           >
        <div className="cartImg"><img src="https://firebasestorage.googleapis.com/v0/b/be-informed-nz.appspot.com/o/images%2Fclassic-tee.jpg?alt=media&token=11df03b3-ec9c-4e29-a7a9-718520a1e469"></img></div>
        <div className="cartData"><p>Classic Tee</p>
        <p>1 x {price}</p>
        <p>Size: S</p>
        </div>
        <div className="cartImg"><img src="https://firebasestorage.googleapis.com/v0/b/be-informed-nz.appspot.com/o/images%2Fclassic-tee.jpg?alt=media&token=11df03b3-ec9c-4e29-a7a9-718520a1e469"></img></div>
        <div className="cartData"><p>Classic Tee</p>
        <p>1 x{price}</p>
        <p>Size: S</p>
        </div>
       
    </motion.div>
        </div>
    )
}

export default Header
