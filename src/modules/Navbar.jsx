import React from 'react'
import { OverviewIcon,TicketsIcon,IdeasIcon, ContactsIcon,AgentsIcon, ArticlesIcon, SettingsIcon, SubscriptionIcon} from "../assets/icons"
import NavItem from '../components/NavItem'
import {Logo} from '../assets/img'
const Navbar = () => {
  return (
    <div className='navbar w-[15%] bg-[#363740]'>
      <div className="flex gap-[12px]  pb-[40px] pr-[41px] pl-[30px]">
     <img className='pt-[37px]' src={Logo} alt=""/>
     <p className='pt-[41px] font-semibold text-[19px] leading-[100%] text-[#A4A6B3]'>Dashboard Kit</p>
     </div>
     <nav className='flex flex-col'>
    <NavItem icon={<OverviewIcon/>} title={"Overview"} path={'/'}/>
    <NavItem icon={<TicketsIcon/>} title={"Tickets"} path={'/tickets'}/>
    <NavItem icon={<IdeasIcon/>} title={"Ideas"} path={'/ideas'}/>
    <NavItem icon={<ContactsIcon/>} title={"Contacts"} path={'/contacts'}/>
    <NavItem icon={<AgentsIcon/>} title={"Agents"} path={'/agents'}/>
    <NavItem icon={<ArticlesIcon/>} title={"Articles"} path={'/articles'}/>
    <div className='w-full h-0 bg-[#DFE0EB] opacity-[6%] p-[1px]'></div>
    <NavItem icon={<SettingsIcon/>} title={"Settings"} path={'/settings'}/>
    <NavItem icon={<SubscriptionIcon/>} title={"Subscription"} path={'/subscription'}/>

     </nav>
    </div>
  )
}

export default Navbar
