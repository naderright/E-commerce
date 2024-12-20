
import {EmailTemplate} from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_APIKEY_RESEND);

export async function POST(req) {
const {user} = await req.json()
  // try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [`${user}`],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'nader' }),
    });

    // if (error) {
    //   return NextResponse.json({ error }, { status: 500 });
    // }

    return NextResponse.json(data);
  // } catch (error) {
    
  //   return NextResponse.json({ error }, { status: 500 });
  // }
}
