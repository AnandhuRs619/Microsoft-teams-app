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
                    return <SiderbarOptions option={option}/>
                })}
            </div>
            <div>
                <div>This is more</div>
            </div>
        </div>
        <div className='sidebar-bottom'>
            {buttonOptions.map((option)=>{
                return(
                    <div>this is bottom</div>
                )
            })}
        </div>
    </div>
  )
}
