import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex bg-green-500 h-16 justify-center items-center gap-8">
            <Link href="/Page">Home</Link>
            <Link href='/About'>about</Link>
            <Link href='/Contact'>contact</Link>
        </div>
    )
}
export default Header
