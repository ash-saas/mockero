"use client"

import React, { useEffect, useState } from 'react'
import { Environments, initializePaddle, Paddle } from "@paddle/paddle-js"
import { toast } from "sonner";
import { Button } from '../ui/button';

const WeeklyPayment = () => {

    const [paddle, setPaddle] = useState<Paddle>()

    useEffect(() => {
        initializePaddle({
            environment: process.env.NEXT_PUBLIC_PADDLE_ENV! as Environments,
            token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!,
        }).then((paddle) => {
            setPaddle(paddle)
        })
    }, [])

    const handleCheckout = async () => {

        if (!paddle) {
            toast.error("Something went wrong...")
            return;
        }

        paddle.Checkout.open({
            items: [
                {
                    priceId: process.env.NEXT_PUBLIC_PADDLE_WEEKLY_PRODUCT_ID!,
                    quantity: 1,
                }
            ],
            settings: {
                displayMode: "overlay",
                theme: "dark",
                successUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/billing/success`,
                allowLogout: false,
            }
        })
    }

    return (
        <Button onClick={handleCheckout}>
            Weekly Plan
        </Button>
    )
}

export default WeeklyPayment