import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center p-4 sticky top-0 z-50 bg-[#121212] backdrop-blur-md w-full md:w-1/2 mx-auto mt-6 rounded-full'>
      <div className='flex items-center'>
        <Image className='mr-2' src="/logo.png" height={16} width={16} alt='logo' />
        <h1 className='text-white text-md font-semibold'>Mockero</h1>
      </div>
      <ul className='md:flex gap-4 list-none hidden'>
        <a href='#features'><li className='cursor-pointer text-white text-sm'>Features</li></a>
        <a href='#pricing'><li className='cursor-pointer text-white text-sm'>Pricing</li></a>
      </ul>
      <Link href="/sign-in">
        <Button className='rounded-full cursor-pointer'>Get Started</Button>
      </Link>
    </nav>
  )
}

export default NavBar