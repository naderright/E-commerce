 export const GetSecretClientPayment=async (amount)=>{
    const res = await fetch('api/create-intent', {
        method: 'POST',
        body: JSON.stringify({
          amount: amount
        })
      });
  
      const clientSecret = await res.json();

      return clientSecret
}