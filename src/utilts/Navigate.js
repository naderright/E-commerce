'use server'
import { redirect } from 'next/navigation'

export const Navigate = (URL)=>{
     redirect('http://localhost:3000'+URL)
}