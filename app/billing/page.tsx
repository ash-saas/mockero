import Pricing from '@/components/Pricing'
import { Button } from '@/components/ui/button'
import { DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose, Drawer } from '@/components/ui/drawer'
import { PRICING_PLAN_NAMES } from '@/constants'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { convertFirebaseTimestampToJSDate } from '@/lib/utils'
import { CreditCard } from 'lucide-react'
import React from 'react'

const Billing = async () => {

    const user = await getCurrentUser() as User;
    const [trialExpirationDate] = await Promise.all([
        convertFirebaseTimestampToJSDate(user?.subscription?.trialExpiration)
    ]);

    return (
        <div>
            <div className='flex items-center'>
                <CreditCard className='mr-2' />
                <h2>Pricing Options</h2>
            </div>
            <p className='mt-1 text-[#A2A2A2]'>Transparent pricing. Cancel anytime.</p>
            <div className='mt-4'>
                {
                    user?.subscription?.plan === PRICING_PLAN_NAMES.TRIAL ?
                        <p>You are currently on <span className='capitalize'>{user.subscription.plan}</span> plan. Your trial expires on {trialExpirationDate?.toLocaleDateString()}</p>
                        :
                        <div className='flex md:items-center items-start md:flex-row flex-col'>
                            <p>You are currently on <span className='capitalize'>{user.subscription.plan}</span> plan. Your card will be automatically charged on {trialExpirationDate?.toLocaleDateString()} </p>
                            <Drawer>
                                <DrawerTrigger className='mt-4 md:mt-0 md:ml-4' asChild>
                                    <Button className='text-red-500 cursor-pointer' variant={"ghost"}>Cancel Plan</Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>Cancel Plan?</DrawerTitle>
                                        <DrawerDescription>You can continue using Mockero until <span>{user?.subscription?.currentPeriodEnd?.toDateString()}</span></DrawerDescription>
                                    </DrawerHeader>
                                    <DrawerFooter>
                                        <Button className='cursor-pointer' variant={"destructive"}>Yes, cancel my plan</Button>
                                        <DrawerClose asChild className='w-full'>
                                            <Button
                                                className='cursor-pointer' variant="default">Go back</Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </div>
                }

            </div>
            <div className='mt-8'>
                <Pricing isPricingPage={true} />
            </div>
        </div>

    )
}

export default Billing