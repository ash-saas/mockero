import { updateUserSubscription } from '@/lib/actions/auth.action';
import { Environment, EventEntity, EventName, Paddle } from '@paddle/paddle-node-sdk'
import { NextResponse } from 'next/server';


const paddle = new Paddle(process.env.PADDLE_SECRET_TOKEN!, {
    environment: process.env.NEXT_PUBLIC_PADDLE_ENV! as Environment,
})

const handleWebhookEvent = async (event: EventEntity) => {

    let updatedData;

    switch (event.eventType) {
        case EventName.SubscriptionCreated:
            updatedData = createUpdatedUserInfoFromWebhook(event, event.eventType);
            break;
        case EventName.SubscriptionActivated:
            updatedData = createUpdatedUserInfoFromWebhook(event, event.eventType);
            break;
        case EventName.SubscriptionCanceled:
            updatedData = createUpdatedUserInfoFromWebhook(event, event.eventType);
            break;
        case EventName.SubscriptionUpdated:
            updatedData = createUpdatedUserInfoFromWebhook(event, event.eventType);
            break;
        case EventName.SubscriptionPastDue:
            updatedData = createUpdatedUserInfoFromWebhook(event, event.eventType);
            break;
        default:
            console.log(event.eventType);
    }

    return updatedData;

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createUpdatedUserInfoFromWebhook = async (event: any, eventType: string) => {

    const webhookData: UpdateUserInfo = {
        paddleCustomerId: event.data?.customerId,
        paddleSubscriptionId: event.data?.id,
        currentPeriodStart: event.data?.currentBillingPeriod?.startsAt
            ? new Date(event.data?.currentBillingPeriod?.startsAt)
            : new Date(),
        currentPeriodEnd: event.data?.currentBillingPeriod?.endsAt
            ? new Date(event.data?.currentBillingPeriod?.endsAt)
            : new Date(),
        planName: event.data?.billingCycle?.interval,
        status: event.data?.status,
        userId: event.data?.customData?.userId,
        eventType: eventType
    }

    return webhookData;

}

export async function POST(req: Request) {

    const signature = (req.headers.get('paddle-signature') as string) || "";
    const rawRequestBody = (await req.text()) || ""

    const secretKey = process.env.PADDLE_WEBHOOK_SECRET!

    try {
        if (signature && rawRequestBody) {

            const eventData = await paddle.webhooks.unmarshal(rawRequestBody, secretKey, signature);
            const updatedData = await handleWebhookEvent(eventData);
            await updateUserSubscription(updatedData!);

        } else {
            return NextResponse.json({ status: 400 })
        }
    } catch (e) {
        console.log(e);
        return NextResponse.json({ status: 500 })
    }

    return NextResponse.json({ ok: true })

}