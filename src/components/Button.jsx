import React from 'react'
import cn from '../lib/cn'

const Button = ({className,text, ...restprops}) => {
  return (
    <button className={cn("bg-primary text-white font-dmsans font-bold text-sm",className) } {...restprops} >{text}</button>
  )
}

export default Button