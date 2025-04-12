import CancellationDrawer from '@/components/payments/CancellationDrawer'
import Pricing from '@/components/Pricing'
import { PRICING_PLAN_NAMES } from '@/constants'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { convertFirebaseTimestampToJSDate } from '@/lib/utils'
import { CreditCard } from 'lucide-react'
import React from 'react'

const Billing = async () => {

    const user = await getCurrentUser() as User;
    const [trialExpirationDate, accessAvailableUntilDate] = await Promise.all([
        convertFirebaseTimestampToJSDate(user?.subscription?.trialExpiration),
        convertFirebaseTimestampToJSDate(user?.subscription?.currentPeriodEnd ?? undefined)
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
                        <p>You are currently on <span className='capitalize  bg-gradient-to-r font-semibold from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>{user.subscription.plan}</span> plan. Your trial expires on {trialExpirationDate?.toLocaleDateString()}
                        </p>
                        :
                        <div className='flex items-start flex-col'>
                            {
                                user?.subscription?.isCancellationQueued ? (
                                    <p className='text-amber-400'>Your plan was cancelled by you. You can continue using Mockero until {accessAvailableUntilDate?.toLocaleDateString()}
                                    </p>
                                ) : (
                                    <>
                                        <p>
                                            You’re currently subscribed to the{' '}
                                            <span className='capitalize bg-gradient-to-r font-semibold from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>
                                                {user.subscription.plan}
                                            </span>{' '}
                                            plan. Your card will be automatically charged on{' '}
                                            <span className='font-semibold'>
                                                {accessAvailableUntilDate?.toLocaleDateString()}
                                            </span>{' '}
                                            unless you choose to cancel.
                                        </p>
                                        <CancellationDrawer subscriptionId={user?.subscription?.paddleSubscriptionId || ""} accessAvailableUntilDate={accessAvailableUntilDate?.toLocaleDateString()} />
                                    </>
                                )
                            }
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