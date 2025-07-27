import React from 'react'

const Card = ({title,title2, extraclass,extraclass2}) => {
  return (
    <div className="w-[258px] h-[134px] border-[1px] border-[#DFE0EB] bg-white rounded-xl">
     <div className="flex flex-col text-center py-[24px]">
      <p className={`font-bold text-[19px] text-[#9FA2B4] ${extraclass}`}>{title}</p>
      <p className={`font-bold text-[40px] text-[#252733] ${extraclass2}`}>{title2}</p>
     </div>
  </div>
  )
}

export default Card
