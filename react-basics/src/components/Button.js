import React from 'react'

const Button = ({btnText, btnColor, btnBorderColor}) => {
  return (
    <div >
        <button style={{
        border: "2px solid",
        color: btnColor,
        borderColor: btnBorderColor,
        background: "white",
        borderRadius: 4,
        padding: 16,
        margin: 8,
        cursor: 'pointer',
    }}>{btnText} </button>
    </div>
  )
}

export default Button