import React from 'react'
import './header.css'
export const Header = () => {
  return (
    <div className='header' >
     <div className='header-menu' > 
     <i class="fi fi-rr-layout-fluid"></i>
     </div>
     <div className='header-leftFold' >
        <label className='header-label' >Microsoft Teams</label>
     </div>
     <div className='header-rightFold'> 
     <div className='header-search'>
     <i class="fi fi-rr-search"></i>
     <input placeholder='Search' />
     </div>
     <div className='header-profile' >
        <div className='header-options'>
        <i class="fi fi-rr-menu-dots"></i>
        </div>
       <img className='header-avatar' src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png" alt="" />
     </div>
     </div>
    </div>
  )
}
