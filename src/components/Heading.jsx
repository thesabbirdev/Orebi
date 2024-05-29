import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h1 className={`${className} font-dmsans`}>{text}</h1>
  )
}

export default Heading