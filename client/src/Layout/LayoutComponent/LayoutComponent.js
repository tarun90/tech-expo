import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./LayoutComponent.css"


const LayoutComponent = ({children}) => {
  return (
    <div className="main-site-wrapper">
      <Header />
      <div className='children-div'>
        <div className='children'>
         {children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default LayoutComponent