'use client'
import React from 'react'
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from "@hookform/error-message";
import { LoginSchema, RegisterSchema } from '@/utilts/formSchema';
import { useDispatch } from 'react-redux';
import { AuthAction } from '@/API/actions/AuthAction';





function FormComponnent({ formType , loginForm }) {
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors },reset, } = useForm({mode:'onChange', resolver: zodResolver(formType == 'Login' ? LoginSchema : RegisterSchema) });

    const submitForm = (data) => {
         console.log(data,formType);
         try {
            dispatch(AuthAction({data, formType}))
         } catch (error) {
            console.log(error);
            
         }
         
         reset()
    }
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg mt-[6rem]">
                    <h2 className="text-2xl font-bold text-center text-gray-800">{formType}</h2>
                    <form className="mt-6" onSubmit={handleSubmit(submitForm)}>

                        {/* inputs */}
                        {loginForm.map((input, key) => <div key={key} className="pb-3">
                            <label className="block text-gray-700">{input.name}</label>
                            <input
                                type={input.type}
                                className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                placeholder={input.placeholder}
                                {...register(input.name)}

                            />
                           
                            
                            <ErrorMessage
                                errors={errors}
                                name={input.name}
                                render={({ message }) => <p className='text-red-700 p-1'>{message}</p>}
                            />
                        </div>)}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 mt-6 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        >
                            {formType}
                        </button>
                    </form>


                    {/* Redirect to Register OR login */}
                    <p className="mt-4 text-sm text-center text-gray-600">
                        {formType == 'Login' ? `Don't have an account? ` : 'Aready you have an account. '}
                        <Link href={formType == 'Login' ? '/register' : '/login'} className="text-blue-500 hover:underline font-bold">
                            {formType == 'Login' ? 'Register' : 'Login'}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FormComponnent
