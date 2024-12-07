'use client'
import React from 'react'
import Lottie from "lottie-react";
import NotFound from './animation_Lotti/NoteFound.json'
import Link from 'next/link';
function NoteFound() {
    return (
        <div className=' flex flex-col  '>
            <div className="noteFount">
                <Lottie style={{ height: '30rem',paddingTop:'6rem' }} animationData={NotFound} loop={true} />;
                <div className="content text-center align-middle pb-4">
                    <p className='text-gray-950  font-bold'>This page is note found go to Home</p>
                    <Link href={'/'}>
                        <button className='p-4 text-white bg-slate-950  cursor-pointer hover:bg-slate-500 rounded-md ' type="button">Go to Home</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default NoteFound
