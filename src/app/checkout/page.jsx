'use client'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './checkoutForm';
import { useSearchParams } from 'next/navigation';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_PUBLISH_KEY}`);
function page() {

  const search = useSearchParams();
  const options = {
    mode: 'payment',
    amount: Number(search.get('amount'))*100,
    currency: 'usd',
    paymentMethodCreation: 'manual',
    // Fully customizable with appearance API.
    appearance: {/*...*/},
 
  };
  // console.log(process.env.NEXT_PUBLIK_PUBLISH_KEY);
  
  return (
    <div>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm amount={Number(search.get('amount'))} />
      </Elements>
    </div>
  )
}

export default page
