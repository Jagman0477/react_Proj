import React from 'react'
import '../../App.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <main className='App'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </main>
  )
}
