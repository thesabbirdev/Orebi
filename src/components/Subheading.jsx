import React from 'react'
import cn from '../lib/cn'

const Subheading = ({className,text, ...restprops}) => {
  return (
    <h2 className={cn('font-dmsans font-bold text-xl text-primary',className)} {...restprops}>{text}</h2>
  )
}

export default Subheading