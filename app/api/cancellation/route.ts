import { NextRequest, NextResponse } from "next/server";

// Stop this route from being pre-rendered
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {

    try {

        const searchParams = request.nextUrl.searchParams;
        const subscriptionId = searchParams.get('subscriptionId');
        const PADDLE_API_BASE_URL = process.env.PADDLE_API_BASE_URL;

        if (!subscriptionId) {
            return NextResponse.json({ error: 'Subscription ID is required' }, { status: 400 });
        }

        const response = await fetch(`${PADDLE_API_BASE_URL}/subscriptions/${subscriptionId}/cancel`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${process.env.PADDLE_API_KEY}`
            },
        });

        const paddleResponse = await response.json();

        return (new NextResponse(paddleResponse, { status: response.status }))

    } catch (err) {
        console.log(err);

    }

}