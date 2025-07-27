import React from 'react'

const Strong = ({title, extraclass}) => {
  return (
    <strong className={`font-bold text-[19px] text-[#252733] ${extraclass}`}>{title}</strong>    

  )
}

export default Strong
