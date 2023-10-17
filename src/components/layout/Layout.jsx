import React from 'react'
import '../../App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {

  let { pathname } = useLocation();

  console.log(!pathname.includes('/admin/'));

  return (
    <main className='App'>
        {(pathname!=='/missing' && !pathname.includes('/admin')) && <Navbar/>}
          <Outlet/>
        {(pathname!=='/missing' && !pathname.includes('/admin')) && <Footer/>}
    </main>
  )
}
