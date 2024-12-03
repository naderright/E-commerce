import FormComponnent from "@/components/FormComponnent";
import React from "react";

const registerForm=[
  // {type:'first_Name',name:'First_Name',placeholder:'Enter your First Name'},
  // {type:'last_Name',name:'last_Name',placeholder:'Enter your last Name'},
  {type:'email',name:'email',placeholder:'Enter your email'},
  {type:'password',name:'password',placeholder:'Enter your password'},
]

const RegisterPage = () => {
  return (
   <>
   <FormComponnent formType={'Register'} loginForm={registerForm} />
   
   </>
  );
};

export default RegisterPage;
