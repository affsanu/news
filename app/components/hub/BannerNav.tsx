"use client"
import LogoBanner from './LogoBanner'
import Navbar from './NavBar'
import TopNav from './TopNav'

const BannerNav = () => {
  return (
    <nav className='w-full h-48 flex flex-col justify-between bg-textDark'>
        <TopNav />
        <LogoBanner />
        <Navbar />
    </nav>
  )
}

export default BannerNav