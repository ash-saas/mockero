import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[--background] w-[75%] mx-auto">
            <div className="py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-black sm:justify-start dark:text-black">
                        <Image
                            src="/logo.png"
                            height={16}
                            width={16}
                            alt="logo"
                        />
                        <h3 className="text-white ml-2">Mockero AI</h3>
                    </div>
                    <p className="mt-4 text-center text-sm text-white lg:mt-0 lg:text-right dark:text-white">
                        Copyright &copy; 2025. All rights reserved.
                    </p>
                </div>

                <hr className='mt-4' />

                {/* New sections for Support and Social */}
                <div className="mt-8 flex flex-row justify-center md:justify-start gap-8">
                    <div className="mb-4">
                        <h4 className="text-white font-bold mb-2">Support</h4>
                        <ul className='list-none'>
                            <li>
                                <a href="/support/refund" className="text-gray-300 hover:text-white">Refund Policy</a>
                            </li>
                            <li className='py-4'>
                                <a href="/support/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/support/terms" className="text-gray-300 hover:text-white">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4 md:ml-16">
                        <h4 className="text-white font-bold mb-2">Social</h4>
                        <ul className='list-none'>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                            </li>
                            <li className='py-4'>
                                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">X</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
