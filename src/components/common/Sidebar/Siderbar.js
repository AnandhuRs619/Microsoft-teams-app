import React from 'react'
import { SidebarData ,SidebarMore ,SidebarButtom } from '../../data/sidebar'
import { SiderbarOptions } from './SiderbarOptions';
export const Siderbar = () => {
    const topOptions = SidebarData;
    const more = SidebarMore;
    const buttonOptions = SidebarButtom;
  return (
    <div className='sidebar'>
        <div className='sidebar-top'>
            <div>
                {topOptions.map((option)=>{
                    return ( <SiderbarOptions option={option} 
                    isActive={option.name==="calls" ? true:false}/>
                    )
                })}
            </div>
            <div>
               <SiderbarOptions option={more}  />
            </div>
        </div>
        <div className='sidebar-bottom'>
            {buttonOptions.map((option)=>{
                return(
                    <SiderbarOptions option={option}/>
                )
            })}
        </div>
    </div>
  )
}
