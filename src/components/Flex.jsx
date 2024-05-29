import React from 'react'

const Flex = ({children,className,onClick}) => {
  return (
    <div className={`${className} flex`} onClick={onClick} >{children}</div>
  )
}

export default Flex