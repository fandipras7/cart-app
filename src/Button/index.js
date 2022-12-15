import React from 'react'
import './index.css'

function Button({classname, disabled, onClick, ...props}) {
  return (
    <button disabled={disabled} className={classname} onClick={onClick} {...props}></button>
  )
}

export default Button