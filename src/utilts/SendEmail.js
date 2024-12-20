 const sendEmail = async(auth)=>{
    await fetch('api/send-email',{
      method:'POST',
      body:JSON.stringify({
        user:auth.email
      })
    })
  } 

  export default sendEmail;