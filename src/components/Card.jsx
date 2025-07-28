import React from 'react'

const Card = ({title,title2, extraclassName,extraclassName2}) => {
  return (
    <div className="w-[258px] h-[134px] border-[1px] border-[#DFE0EB] bg-white rounded-xl hover:border-[#3751FF] hover:shadow-blue-500 shadow-sm duration-200 cursor-pointer">
     <div className="flex flex-col text-center py-[24px]">
      <p className={`font-bold text-[19px] text-[#9FA2B4] active:text-[#3751FF] ${extraclassName}`}>{title}</p>
      <p className={`font-bold text-[40px] text-[#252733] hover:text-[#3751FF] ${extraclassName2}`}>{title2}</p>
     </div>
  </div>
  )
}

export default Card
