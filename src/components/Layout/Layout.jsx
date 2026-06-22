import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { ThemeContext } from '../../context/ThemeContext'


const Layout = ({ search, setSearch }) => {

  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={
      darkMode
        ? "bg-zinc-900 text-white min-h-screen overflow-x-hidden"
        : "bg-white text-black min-h-screen overflow-x-hidden"
    }
    >
      <Navbar search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
