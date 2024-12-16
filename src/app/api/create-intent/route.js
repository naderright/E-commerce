import { NextResponse } from 'next/server';
import Stripe from 'stripe'

const stripe = new Stripe(process.env.NEXT_PUBLIC_SECRITE_KEY )

export async function POST(req) {
     const data = await req.json();

    const amount = data.amount;
    try {

        const paymentIntent = await stripe.paymentIntents.create({
            amount:Number(amount) * 100,
            currency:'USD'
        })

        return NextResponse.json(paymentIntent.client_secret,{status:200})
        
    } catch (error) {
        return NextResponse(error,{status:400})
    }

}