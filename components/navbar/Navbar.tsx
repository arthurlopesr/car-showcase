import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '../customButton/CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between sm:px-16 px-6 py-4'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/logo.svg'
            alt='Car Hub Logo'
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>

      <CustomButton
        title='Sign In'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px] transition duration-400 ease-in-out hover:opacity-80'
      />
      </nav>
    </header>
  )
}

export default Navbar
