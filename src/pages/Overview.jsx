import React from "react";
import Card from "../components/card";
import Strong from "../components/strong";
import Paragraph from "../components/paragraph";
import { AddIcon, TickIcon } from "../assets/icons";

const Overview = () => {
  return (
    <section className="section-className px-[33px]">
      <div className="flex flex-col">
        <div className="flex gap-[55px] ">
          <Card title={"Unresolved"} title2={"60"} />
          <Card title={"Overdue"} title2={"16"} />
          <Card title={"Open"} title2={"43"} />
          <Card title={"On hold"} title2={"64"} />
        </div>

        <div className="mt-[30px] flex bg-white rounded-xl">
          <div className=" w-[70%] border-[1px]  border-[#DFE0EB]">
            <div className="flex justify-between items-center p-[32px]">
              <div className="">
                <Strong title={"Today’s trends"} />
                <Paragraph
                  extraclassName={"pt-[8px] font-normal"}
                  title={"as of 25 May 2019, 09:41 PM"}
                />
              </div>
              <div className="border-r-[1px] border-[#DFE0EB]">
                <div className="flex items-center gap-[5px]">
                  <div className="w-[16px] h-[2px] bg-[#3751FF]"></div>
                  <Paragraph extraclassName={"pr-[32px]"} title={"Today"} />
                  <div className="w-[16px] h-[2px] bg-[#9FA2B4]"></div>
                  <Paragraph title={"Yesterday"} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[30%]">
            <div className="flex flex-col items-center py-[28px] border-b-[1px] border-b-[#DFE0EB]">
              <Paragraph extraclassName={"leading-[22px]"} title={"Resolved"} />
              <Strong title={"449"} />
            </div>
            <div className="flex flex-col items-center py-[28px] border-b-[1px] border-b-[#DFE0EB]">
              <Paragraph extraclassName={"leading-[22px]"} title={"Received"} />
              <Strong title={"426"} />
            </div>

            <div className="flex flex-col items-center py-[28px] border-b-[1px] border-b-[#DFE0EB]">
              <Paragraph
                extraclassName={"leading-[22px]"}
                title={"Average first response time"}
              />
              <Strong title={"33m"} />
            </div>

            <div className="flex flex-col items-center py-[28px] border-b-[1px] border-b-[#DFE0EB]">
              <Paragraph
                extraclassName={"leading-[22px]"}
                title={"Average response time"}
              />
              <Strong title={"3h 8m"} />
            </div>

            <div className="flex flex-col items-center py-[28px] border-b-[1px] border-b-[#DFE0EB]">
              <Paragraph
                extraclassName={"leading-[22px]"}
                title={"Resolution within SLA"}
              />
              <Strong title={"94%"} />
            </div>
          </div>
        </div>

        <div className="flex gap-[110px] pb-[30px]">
          <div className="w-[546px] h-[336px] mt-[30px] border-[1px] p-[34px] border-[#DFE0EB] bg-white rounded-xl flex flex-col">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <Strong title={"Unresolved tickets"} />
                <Paragraph
                  extraclassName={"py-[8px]"}
                  title={"Group: Support"}
                />
              </div>
              <Paragraph
                extraclassName={"text-[#3751FF]"}
                title={"View details"}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between pt-[36px]">
                <Paragraph
                  extraclassName={"leading-[20px] text-[#252733] "}
                  title={"Waiting on Feature Request"}
                />
                <Paragraph extraclassName={"pb-[18px]"} title={"4238"} />
              </div>
              <div className=" border-[1px] border-[#DFE0EB]"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between pt-[20px]">
                <Paragraph
                  extraclassName={"leading-[20px] text-[#252733] "}
                  title={"Awaiting Customer Response"}
                />
                <Paragraph extraclassName={"pb-[18px]"} title={"1005"} />
              </div>
              <div className=" border-[1px] border-[#DFE0EB]"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between pt-[20px]">
                <Paragraph
                  extraclassName={"leading-[20px] text-[#252733] "}
                  title={"Awaiting Developer Fix"}
                />
                <Paragraph extraclassName={"pb-[18px]"} title={"914"} />
              </div>
              <div className=" border-[1px] border-[#DFE0EB]"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between pt-[20px]">
                <Paragraph
                  extraclassName={"leading-[20px] text-[#252733] "}
                  title={"Pending"}
                />
                <Paragraph extraclassName={"pb-[18px]"} title={"281"} />
              </div>
            </div>
          </div>
          <div className="w-[546px] h-[336px] mt-[30px] border-[1px] p-[34px] border-[#DFE0EB] bg-white rounded-xl flex flex-col">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <Strong title={"Tasks"} />
                <Paragraph extraclassName={"py-[8px]"} title={"Today"} />
              </div>
              <Paragraph extraclassName={"text-[#3751FF]"} title={"View all"} />
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between pt-[30px] pb-[18px]">
                <Paragraph
                  extraclassName={"leading-[20px] text-[#C5C7CD] "}
                  title={"Create new task"}
                />
                <AddIcon />
              </div>
              <div className=" border-[1px] border-[#DFE0EB]"></div>
            </div>

            <div className="flex pt-[15px]">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="peer hidden" />
                <div className="w-5 h-5 rounded-full border border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
                  <TickIcon />
                </div>
              </label>
              <Paragraph
                extraclassName={"text-[#252733] pl-[16px] pr-[250px] pt-[7px]"}
                title={"Finish ticket update"}
              />
              <div className="w-[74px] h-[24px] rounded-full bg-amber-500 mb-[15px]">
                <Strong
                  extraclassName={
                    "!text-[11px] justify-center flex items-center pt-[4px] text-center text-white "
                  }
                  title={"URGENT"}
                />
              </div>
            </div>
            <div className=" border-[1px] border-[#DFE0EB]"></div>

            <div className="flex pt-[15px]">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="peer hidden" />
                <div className="w-5 h-5 rounded-full border border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
                  <TickIcon />
                </div>
              </label>
              <Paragraph
                extraclassName={"text-[#252733] pl-[16px] pr-[230px] pt-[7px]"}
                title={"Create new ticket example"}
              />
              <div className=" w-[54px] h-[24px] rounded-full bg-[#29CC97] mb-[15px]">
                <Strong
                  extraclassName={
                    "!text-[11px] justify-center flex items-center pt-[4px] text-center text-white "
                  }
                  title={"NEW"}
                />
              </div>
            </div>
            <div className=" border-[1px] border-[#DFE0EB]"></div>
            <div className="flex pt-[15px]">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="peer hidden" />
                <div className="w-5 h-5 rounded-full border border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
                  <TickIcon />
                </div>
              </label>
              <Paragraph
                extraclassName={"text-[#252733] pl-[16px] pr-[250px] pt-[7px]"}
                title={"Update ticket report"}
              />
              <div className="w-[76px] h-[24px] rounded-full bg-[#F0F1F7] mb-[15px]">
                <Strong
                  extraclassName={
                    "!text-[#9FA2B4] !text-[11px] justify-center flex items-center pt-[4px] text-center text-white "
                  }
                  title={"DEFAULT"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
