import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[--background]">
            <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-black sm:justify-start dark:text-black">
                        <Image
                            src="/logo.png"
                            height={16}
                            width={16}
                            alt='logo'
                        />
                        <h3 className='text-white ml-2'>Mockero AI</h3>
                    </div>

                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400">
                        Copyright &copy; 2025. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer