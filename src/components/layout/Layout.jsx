import React from 'react'
import '../../App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {

  let { pathname } = useLocation();

  return (
    <main className='App'>
        {pathname!=='/missing' && <Navbar/>}
          <Outlet/>
        {pathname!=='/missing' && <Footer/>}
    </main>
  )
}
