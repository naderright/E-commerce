// import FormComponnent from "@/components/FormComponnent";
import dynamic from "next/dynamic";
import React from "react";
const FormComponnent = dynamic(()=>import('@/components/FormComponnent'))


const loginForm =[
  {type:'email',name:'email',placeholder:'Enter your email'},
  {type:'password',name:'password',placeholder:'Enter your password'},
]

const LoginPage = () => {
  return (
  <>
  
     <FormComponnent formType={'Login'} loginForm={loginForm} />
  </>
   
  );
};

export default LoginPage;
