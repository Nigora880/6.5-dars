import { NavLink } from "react-router-dom"

const NavItem = ({title, icon, path}) => {
  return (
    <NavLink className={'py-[18px]  relative text-[#A4A6B3] pl-[32px] flex items-center gap-[24px] font-normal text-[16px] leading-[100%]'} to={path}>
      {icon}
     <span>{title}</span>
      </NavLink>
  )
}

export default NavItem
