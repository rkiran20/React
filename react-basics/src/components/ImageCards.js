import React from 'react'

const ImageCards = ({imageLink,altImage}) => {
    console.log(imageLink)
  return (
    <div className=''>
        <img src= {imageLink}  alt={altImage}  className='imgCardDiv'></img>
    </div>
  )
}

export default ImageCards