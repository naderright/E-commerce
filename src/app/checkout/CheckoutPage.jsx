'use client'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './checkoutForm';
// import { useSearchParams } from 'next/navigation';
import SearchParams from '@/utilts/SearchParams';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_PUBLISH_KEY}`);
function CheckoutPage() {

  // const search = useSearchParams();
  // const amount = search.get('amount')
  const amount = SearchParams('amount')
  const options = {
    mode: 'payment',
    amount: Number(amount)*100,
    currency: 'usd',
    paymentMethodCreation: 'manual',
    // Fully customizable with appearance API.
    appearance: {/*...*/},
 
  };
  // console.log(process.env.NEXT_PUBLIK_PUBLISH_KEY);
  
  return (
    <div>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm amount={Number(amount)} />
      </Elements>
    </div>
  )
}

export default CheckoutPage
