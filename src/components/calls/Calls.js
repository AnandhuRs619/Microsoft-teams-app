import React from 'react'
import { Header } from '../common/Header/header'
import { Siderbar } from '../common/Sidebar/Siderbar'
import { LeftFold } from './leftFold/leftFold'
import { RightFold } from './rightFold/rightFold'
import './calls.css'
export const Calls = () => {
  return (
    <div className='Calls-container'>
       <Header/>
       <div className='calls-body' >
          <div className='calls-sidebar'>
                <Siderbar/>
          </div>
          <div className='calls-leftFold'>
            <LeftFold/>
          </div>
          <div className='calls-rightFold'>
           <RightFold/>
          </div>
       </div>
    </div>
  )
}
