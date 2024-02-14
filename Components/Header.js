import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex bg-green-500 h-16 justify-center items-center gap-8">
            <Link href='/About'>About</Link>
            <Link href='/Contact'>Contact</Link>
        </div>
    )
}
export default Header
