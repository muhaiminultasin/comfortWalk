import React from 'react'
import SecTitle from './SecTitle'
import AccordionBox from './Accordion'

const FrequentlyAsked = () => {
  return (
    <div className='py-10 px-5 md:px-10'>
      <SecTitle title={`Questions? We've Got Answers`} subtitle={''}/>

      <div className=' w-full md:w-9/12  mx-auto '>
        <AccordionBox/>
      </div>
    </div>
  )
}

export default FrequentlyAsked
