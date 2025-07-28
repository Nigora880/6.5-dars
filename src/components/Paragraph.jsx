import React from 'react'

const Paragraph = ({title, extraclassName}) => {
  return (
    <p className={`font-semibold text-[12px] leading-[16px] text-[#9FA2B4] ${extraclassName}`}>{title}</p>  

  )
}

export default Paragraph
