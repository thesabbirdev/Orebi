import React from 'react'

const Map = ({className}) => {
  return (
    <>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116869.45855783513!2d90.23839473724362!3d23.741295777653452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1706701822912!5m2!1sen!2sbd" width="600" height="450" style={{border:0}} className={`${className} w-full`} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Map