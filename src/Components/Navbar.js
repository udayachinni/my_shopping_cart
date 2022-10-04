import React from 'react'
import  '../Styles/Navbar.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Navbar() {
  return (
    
        <nav>
            <div className='nav_box'>
                <span className='my_shop'>My shopping</span>
                <div className='cart'>
                    <span >
                        <AddShoppingCartIcon/>
                   
                    </span>
                   <span>0</span>
                </div>
            </div>
        </nav>

      
    
  )
}

export default Navbar
