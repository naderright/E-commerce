'use server'
import { redirect } from 'next/navigation'

export const Navigate = (origin,URL)=>{
     redirect(origin+URL)
}