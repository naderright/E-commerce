'use client'
import { removeCart } from '@/API/slices/CartSlice';
import { addOrder } from '@/API/slices/OrderSlice';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CheckoutForm = ({ amount }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state)=>state.auth.user)
  const cartItems = useSelector((state)=>state.cart.cart)

  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  }

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    //// create order
    const cartUser = cartItems.filter((item) => item.user == auth.email);
    const orderUser = {
      user: auth.email,
      items: cartUser,
      amount: amount
    }
    
    setLoading(true)
    dispatch(addOrder(orderUser))
    dispatch(removeCart())
    setLoading(false)
    
    


    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const res = await fetch('api/create-intent', {
      method: 'POST',
      body: JSON.stringify({
        amount: amount
      })
    });

    const clientSecret = await res.json();

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/Payment_Success",
      },
    });


    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="pyment py-[5rem] px-[5rem]">
        <PaymentElement />
        <button disabled={!stripe || loading} className='bg-slate-950 w-full text-white font-bold
         py-3 mt-2 cursor-pointer rounded-md hover:bg-slate-800' >
          Submit
        </button>
        {errorMessage && <div className='text-red-800'>{errorMessage}</div>}

      </div>
    </form>
  )
};

export default CheckoutForm;