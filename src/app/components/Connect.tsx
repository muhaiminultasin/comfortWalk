import React from 'react'
import SecTitle from './SecTitle'
import OfferCard from './OfferCard'
import SocialCard from './SocialCard'

const Connect = () => {
  return (
    <div className='px-5 md:px-10'>
      <SecTitle title={'Connect with Us'} subtitle={''}/>
      <div>
        <SocialCard/>
      </div>
    </div>
  )
}

export default Connect
