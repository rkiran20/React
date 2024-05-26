import React from 'react'

const ShoppingCard = ({imageSrc,title,price,inStock}) => {
  console.log(price, imageSrc,title);
  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-between',   }}>
            <ul><img src={imageSrc}  alt='image-photo' style={{width: 100, height: 100}}></img></ul>
            <ul>{title}</ul>
            <ul> $ {price}</ul>
        </div>
    </div>
  )
}

export default ShoppingCard