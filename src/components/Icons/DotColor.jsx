import React from 'react'

function DotColor({classname,fill}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`${classname}`} width="12" height="11" viewBox="0 0 12 11" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 11C9.03757 11 11.5 8.53757 11.5 5.5C11.5 2.46243 9.03757 0 6 0C2.96243 0 0.5 2.46243 0.5 5.5C0.5 8.53757 2.96243 11 6 11Z" fill={fill}/>
    </svg>
  )
}

export default DotColor