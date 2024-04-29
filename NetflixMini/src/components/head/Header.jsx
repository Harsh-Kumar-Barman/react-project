import React, { useState } from 'react'
import logo from '../../logo.png'
import { IoMdArrowDropdown } from "react-icons/io";


const Header = () => {
    const [dropHeight, setDropHeight] = useState(false);
    const [dropval, setDropval] = useState("english")
    const langBtn = () => {
        setDropHeight(prev => !prev);

    }
    const langSelect = (e) => {
        setDropval(e.target.outerText)
        setDropHeight(prev => !prev);
    }
    return (
        <>
            <nav className='min-w-full h-16 px-5 gap-5 absolute'>
                <div className="header mt-5 max-w-[980px] mx-auto flex justify-between items-center">
                    <div className="logo">
                        <img className='sm:w-[15vw] w-[30vw]' src={logo} alt="" />
                    </div>
                    <div className="button mr-2 flex items-center sm:gap-5">
                        <div className="dropDown">
                            <button onClick={langBtn} className='text-white border-[.1px] px-3 py-1 flex items-center gap-2 rounded capitalize'>{dropval} <IoMdArrowDropdown /></button>
                            <div className={`selector text-center bg-white rounded-xl ${dropHeight ? "h-15" : "h-0"} overflow-hidden`}>
                                <li onClick={langSelect} className='capitalize list-none font-bold my-1 hover:bg-blue-600 hover:text-white cursor-pointer'>english</li>
                                <li onClick={langSelect}  className='capitalize list-none font-bold my-1 hover:bg-blue-600 hover:text-white cursor-pointer'>हिन्दी</li>
                            </div>
                        </div>
                        <button className='bg-[rgba(229,9,20)] hover:bg-[#c11119] duration-150 rounded text-white p-1 flex items-center px-3 py-1 sm:text-xl text-md m-2'> Sign In</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header