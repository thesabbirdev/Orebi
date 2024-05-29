import React from 'react'

const Paragraph = ({className,text,onClick}) => {
  return (
    <p className={`${className} font-dmsans`} onClick={onClick}>{text}</p>
  )
}

export default Paragraph