"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from '../ui/drawer'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const CancellationDrawer = ({ accessAvailableUntilDate, subscriptionId }: { accessAvailableUntilDate: any, subscriptionId: string }) => {

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleCancellation = async () => {

        const response = await fetch(`/api/cancellation?subscriptionId=${subscriptionId}`, {
            method: "POST"
        })

        if (!response.ok) {
            const errorData = await response.json();
            toast.error("Could not cancel subscription")
            console.error("Cancellation error:", errorData);
            throw new Error(`Cancellation failed: ${errorData.error || response.status}`);
        }

        setIsOpen(true)
        toast.success("Subscription cancelled")

        //Referesh page so that latest info from the server
        router.refresh()
    }

    return (
        <Drawer open={isOpen}>
            <DrawerTrigger className='mt-4' asChild>
                <Button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer' variant={"destructive"}>Cancel Plan</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Cancel Plan?</DrawerTitle>
                    <DrawerDescription>We're sorry to see you go! <span className='text-amber-400'>You can continue using Mockero until <span>{accessAvailableUntilDate}</span></span>. We hope to see you back soon to continue mastering your interview skills.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button onClick={() => handleCancellation()} className='cursor-pointer' variant={"destructive"}>Yes, cancel my plan</Button>
                    <DrawerClose asChild className='w-full'>
                        <Button
                            onClick={() => setIsOpen(!isOpen)}
                            className='cursor-pointer' variant="default">Go back</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CancellationDrawer