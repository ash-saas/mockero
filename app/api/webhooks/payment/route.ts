import { Environment, EventName, Paddle } from '@paddle/paddle-node-sdk'
import { NextResponse } from 'next/server';


const paddle = new Paddle(process.env.PADDLE_SECRET_TOKEN!, {
    environment: process.env.NEXT_PUBLIC_PADDLE_ENV! as Environment,
})

export async function POST(req: Request) {

    const signature = (req.headers.get('paddle-signature') as string) || "";
    const rawRequestBody = (await req.text()) || ""

    const secretKey = process.env.PADDLE_WEBHOOK_SECRET!

    try {
        if (signature && rawRequestBody) {

            const eventData = await paddle.webhooks.unmarshal(rawRequestBody, secretKey, signature);
            switch (eventData.eventType) {
                case EventName.CustomerCreated:
                    console.log(`Customer ${eventData.data.id} was created`);
                    break;
                case EventName.SubscriptionActivated:
                    console.log(`Subscription ${eventData.data.id} was activated`);

                    break;
                case EventName.SubscriptionCanceled:
                    console.log(`Subscription ${eventData.data.id} was cancelled`);
                    break;
                case EventName.SubscriptionUpdated:
                    console.log(`Subscription ${eventData.data.id} was updated`);
                    break;
                case EventName.SubscriptionPastDue:
                    console.log(`Subscription ${eventData.data.id} was past due date`);
                    break;
                default:
                    console.log(eventData.eventType);
            }

        } else {
            return NextResponse.json({ status: 400 })
        }
    } catch (e) {
        console.log(e);
    }

    return NextResponse.json({ ok: true })

}