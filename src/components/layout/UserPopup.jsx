import Button from '../Button'
import { Link } from 'react-router-dom'

function UserPopup({className}) {
  return (
    <div className={`w-[200px] h-[100px] absolute top-[210px] sm:top-[165px] sm:right-[9%] ${className}`}>
      <Link to='my-account'><Button text='My Account' className='w-full h-1/2  bg-white transition-all hover:bg-primary hover:text-white text-primary font-regular border border-[#F0F0F0]'/></Link>
      <Button text='Log Out' className='w-full h-1/2 bg-white transition-all hover:bg-primary hover:text-white text-primary font-regular border border-[#F0F0F0]'/>
    </div>
  )
}

export default UserPopup