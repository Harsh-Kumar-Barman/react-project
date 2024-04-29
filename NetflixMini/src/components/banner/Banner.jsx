import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
    const [email, setEmail] = useState("")
    const submitBtn = (e) => {
        e.preventDefault();
        setEmail("")

    }
    return (
        <>
            <div className=" bgimage w-full h-[100vh]">
                <div className="blackCover flex items-center justify-center bg-[rgba(0,0,0,0.5)] w-full h-[100vh]">
                    <div className="flex justify-center items-center flex-col">
                        <div className="content z-20 flex flex-col justify-center items-center">
                            <h1 className='text-white font-bold sm:text-[3vw] text-[6vw] w-[80vw] text-center'>
                                The biggest Indian hits. The best Indian stories. All streaming here.
                            </h1>
                            <p className='text-white text-center sm:text-[2vw] my-4'>Watch anywhere. Cancel anytime.</p>
                            <p className='text-white text-center sm:text-[2vw] my-4'>Ready to watch? Enter your email to create or restart your membership.</p>
                        </div>
                        <div className="buttons w-full mx-auto flex items-center justify-center">
                            <input type="email" className='text-gray-200 py-3 sm:w-1/2 w-1/2 sm:text-3xl px-5 bg-[rgba(63,62,62,0.7)] outline-none border-[.1px] border-white  rounded' placeholder='Email address' />
                            <button value={email} onChange={(e) => setEmail(e.target.value)} onClick={submitBtn} className='bg-[rgba(229,9,20)] hover:bg-[#c11119] duration-150 rounded text-white px-4 py-3 w-2/1 flex items-center sm:text-3xl text-xl m-2'>Get Start <IoIosArrowForward /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner