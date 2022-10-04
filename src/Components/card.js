import React from 'react'
import '../Styles/amazon.css'

const Cards = ({item}) => {
    const {id,title,author,price,img}=item;
  return (
    <div className='cards'>
        <div className='img_box'>
            <img src={img} alt=""/>
        </div>
        <div className='details'>
            <p>{title}</p>
            <p>{author}</p>
            <p>{price}</p>
            <button>add to cart</button>
        </div>
    </div>
  )
}

export default Cards
