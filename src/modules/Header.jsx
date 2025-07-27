import { useLocation } from "react-router-dom"
import { SearchIcon, NotificationIcon } from "../assets/icons";
import { HeaderImg } from "../assets/img";

const Header = () => {
  const {pathname} = useLocation()
  console.log(pathname.split("/")[1]);
  
  return (
    <header className="bg-[#F7F8FC]">
      <div className=" justify-between flex pt-[30px] pb-[54px] px-[30px]">
    <div className="capitalize font-semibold text-[24px] items-center flex">
     {pathname == "/" ? "Overview" : pathname.split("/")[1] } </div>
     <div className="justify-end flex gap-[20px]">
      <div className="flex gap-[20px] pt-[15px]">
     <SearchIcon/>
    <NotificationIcon/>
    </div>
    <p className="pt-[13px]" >Jones Ferdinand</p>
    <img src={HeaderImg} alt="" width={44} height={44} />
    </div>
    </div>
    </header>
  )
}

export default Header
