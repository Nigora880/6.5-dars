import React from 'react'
import Card from '../components/card'
import Strong from '../components/strong'
import Paragraph from '../components/paragraph'
import { AddIcon, TickIcon } from '../assets/icons'

const Overview = () => {
  return (
    <section className='section-class px-[33px]'>
      <div className="flex flex-col">
      <div className="flex gap-[55px] ">
      <Card title={"Unresolved"} title2={"60"}/> 
      <Card title={"Overdue"} title2={"16"}/>
      <Card title={"Open"} title2={"43"}/>
      <Card title={"On hold"} title2={"64"}/>
  </div>

  <div className="w-[1200px] h-[546px] mt-[30px] border-[1px] border-[#DFE0EB] bg-white rounded-xl">
   <div className="flex">
  <div className="flex gap-[250px]">
   <div className="flex-col p-[32px]">
    <Strong title={"Today’s trends"}/>
    <Paragraph extraclass={"pt-[8px] font-normal"} title={"as of 25 May 2019, 09:41 PM"}/>
   </div>
      <div className="flex pb-[430px] justify-end">
       <div className="flex items-center gap-[5px]">
   <div className="w-[16px] h-[2px] bg-[#3751FF]"></div>
   <Paragraph extraclass={"pr-[32px]"} title={"Today"}/>
   <div className="w-[16px] h-[2px] bg-[#9FA2B4]"></div>
   <Paragraph title={"Yesterday"}/>
   </div>
   </div>   
   <div className="h-[546px] bg-[#DFE0EB] p-[1px]"></div>
  </div>

   <div className="flex flex-col">
       <div className="flex flex-col items-center px-[30px] pt-[32px]">
         <Paragraph extraclass={"leading-[22px]"} title={"Resolved"}/>
         <Strong extraclass={"pt-[6px] pb-[24px]"} title={"449"}/>
      <div className="w-[250px] h-0 bg-[#DFE0EB] p-[1px]"></div>
    </div>

    <div className="flex flex-col items-center px-[32px] pt-[24px]">
         <Paragraph extraclass={"leading-[22px]"} title={"Received"}/>
      <Strong extraclass={"pt-[6px] pb-[24px]"} title={"426"}/>
      <div className="w-[240px] h-0 bg-[#DFE0EB] p-[1px]"></div>
    </div>

    <div className="flex flex-col items-center px-[32px] pt-[24px]">
         <Paragraph extraclass={"leading-[22px]"} title={"Average first response time"}/>
      <Strong extraclass={"pt-[6px] pb-[24px]"} title={"33m"}/>
      <div className="w-[240px] h-0 bg-[#DFE0EB] p-[1px]"></div>
    </div>

    <div className="flex flex-col items-center px-[32px] pt-[24px]">
         <Paragraph extraclass={"leading-[22px]"} title={"Average response time"}/>
      <Strong extraclass={"pt-[6px] pb-[24px]"} title={"3h 8m"}/>
      <div className="w-[240px] h-0 bg-[#DFE0EB] p-[1px]"></div>
    </div>

    <div className="flex flex-col items-center px-[32px] pt-[24px]">
         <Paragraph extraclass={"leading-[22px]"} title={"Resolution within SLA"}/>
      <Strong extraclass={"pt-[6px] pb-[24px]"} title={"94%"}/>
    </div>
   </div>
   </div>
   </div>
   <div className="flex gap-[110px] pb-[30px]">
    <div className="w-[546px] h-[336px] mt-[30px] border-[1px] p-[34px] border-[#DFE0EB] bg-white rounded-xl flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Strong title={"Unresolved tickets"}/>
          <Paragraph extraclass={"py-[8px]"} title={"Group: Support"}/>
        </div>
        <Paragraph extraclass={"text-[#3751FF]"} title={"View details"}/>
      </div>
      <div className="flex flex-col">
         <div className="flex justify-between pt-[36px]">
     <Paragraph extraclass={"leading-[20px] text-[#252733] "} title={"Waiting on Feature Request"}/>
     <Paragraph extraclass={"pb-[18px]"} title={"4238"}/>
    </div>
    <div className=" border-[1px] border-[#DFE0EB]"></div>
    </div>
    <div className="flex flex-col">
      <div className="flex justify-between pt-[20px]">
     <Paragraph extraclass={"leading-[20px] text-[#252733] "} title={"Awaiting Customer Response"}/>
     <Paragraph extraclass={"pb-[18px]"} title={"1005"}/>
    </div>
    <div className=" border-[1px] border-[#DFE0EB]"></div>
    </div>
    <div className="flex flex-col">
      <div className="flex justify-between pt-[20px]">
     <Paragraph extraclass={"leading-[20px] text-[#252733] "} title={"Awaiting Developer Fix"}/>
     <Paragraph extraclass={"pb-[18px]"} title={"914"}/>
    </div>
    <div className=" border-[1px] border-[#DFE0EB]"></div>
    </div>
    <div className="flex flex-col">
      <div className="flex justify-between pt-[20px]">
     <Paragraph extraclass={"leading-[20px] text-[#252733] "} title={"Pending"}/>
     <Paragraph extraclass={"pb-[18px]"} title={"281"}/>
    </div>
    </div>
    </div>
    <div className="w-[546px] h-[336px] mt-[30px] border-[1px] p-[34px] border-[#DFE0EB] bg-white rounded-xl flex flex-col">
   <div className="flex justify-between">
        <div className="flex flex-col">
          <Strong title={"Tasks"}/>
          <Paragraph extraclass={"py-[8px]"} title={"Today"}/>
        </div>
        <Paragraph extraclass={"text-[#3751FF]"} title={"View all"}/>
      </div>

      <div className="flex flex-col">
      <div className="flex justify-between pt-[30px] pb-[18px]">
     <Paragraph extraclass={"leading-[20px] text-[#C5C7CD] "} title={"Create new task"}/>
     <AddIcon/>
    </div>
    <div className=" border-[1px] border-[#DFE0EB]"></div>
    </div>


    <div className="flex pt-[15px]">
    <label class="flex items-center space-x-2 cursor-pointer">
    <input type="checkbox" class="peer hidden" />
    <div class="w-5 h-5 rounded-full border border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
     <TickIcon/>
    </div>
  </label>
  <Paragraph extraclass={"pl-[16px] pr-[250px] pt-[7px]"} title={"Finish ticket update"}/>
 <div className="w-[74px] h-[24px] rounded-full bg-amber-500 mb-[15px]">
  <Strong extraclass={"!text-[11px] justify-center flex items-center pt-[4px] text-center text-white "} title={"URGENT"}/>
 </div>
    </div>
    <div className=" border-[1px] border-[#DFE0EB]"></div>

    <div className="flex pt-[15px]">
    <label class="flex items-center space-x-2 cursor-pointer">
    <input type="checkbox" class="peer hidden" />
    <div class="w-5 h-5 rounded-full border border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
     <TickIcon/>
    </div>
  </label>
  <Paragraph extraclass={"pl-[16px] pr-[250px] pt-[7px]"} title={"Finish ticket update"}/>
 <div className="w-[54px] h-[24px] rounded-full bg-[#29CC97] mb-[15px]">
  <Strong extraclass={"!text-[11px] justify-center flex items-center pt-[4px] text-center text-white "} title={"NEW"}/>
 </div>
    </div>
    <div className=" border-[1px] border-[#DFE0EB]"></div>
    <div className="flex pt-[15px]">
    <label class="flex items-center space-x-2 cursor-pointer">
    <input type="checkbox" class="peer hidden" />
    <div class="w-5 h-5 rounded-full border border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
     <TickIcon/>
    </div>
  </label>
  <Paragraph extraclass={"pl-[16px] pr-[250px] pt-[7px]"} title={"Finish ticket update"}/>
 <div className="w-[76px] h-[24px] rounded-full bg-[#F0F1F7] mb-[15px]">
  <Strong extraclass={"!text-[#9FA2B4] !text-[11px] justify-center flex items-center pt-[4px] text-center text-white "} title={"DEFAULT"}/>
 </div>
    </div>
 </div>
   </div>
   
  </div>
    </section>
  )
}

export default Overview