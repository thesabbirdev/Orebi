import React from 'react'
import { Link } from 'react-router-dom'

const List = ({className,href,text,target,onClick}) => {
  return (
    <Link to={href} target={target} onClick={onClick} ><li className={`${className} font-dmsans`}>{text}</li></Link>
  )
}

export default List