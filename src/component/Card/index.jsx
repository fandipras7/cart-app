import React from 'react'
import './index.css'

function Card({className, children, ...props}) {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Card