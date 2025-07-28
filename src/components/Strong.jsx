import React from 'react'

const Strong = ({title, extraclassName}) => {
  return (
    <strong className={`font-bold text-[19px] text-[#252733] ${extraclassName}`}>{title}</strong>    

  )
}

export default Strong
