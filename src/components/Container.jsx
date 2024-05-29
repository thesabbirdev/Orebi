import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`${className} max-w-container mx-auto px-[10px] xl:px-0`}>{children}</div>
  )
}

export default Container