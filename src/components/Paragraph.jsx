import React from 'react'

const Paragraph = ({title, extraclass}) => {
  return (
    <p className={`font-semibold text-[12px] leading-[16px] text-[#9FA2B4] ${extraclass}`}>{title}</p>  

  )
}

export default Paragraph
