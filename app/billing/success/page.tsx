import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { CircleCheckBig } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PageLayout = () => {
    return (
        <MaxWidthWrapper>
            <div className='w-full h-[65vh]'>
                <div className='w-full h-full flex flex-col items-center justify-center gap-4'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex flex-row items-center'>
                            <CircleCheckBig color='#45ea69' />
                            <h2 className='ml-4'>Payment Successful</h2>
                        </div>
                        <p className='mt-2'>Let's ace those interviews 💪🏻</p>
                    </div>
                    <Link href={"/dashboard"} className='mt-4'>
                        <Button className='cursor-pointer'>
                            Return To Dashboard
                        </Button>
                    </Link>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default PageLayout