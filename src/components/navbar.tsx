"use client"
import React from 'react';
import { useRouter } from 'next/navigation'

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
    const router = useRouter();
    return (
        <div className="navbar-1">
            <button onClick={() => router.push("/")}>Home Page</button>
            <button onClick={() => router.push("/about")}>About Page</button>
            <button onClick={() => router.push("/contact")}>Contact Page</button>
            <button onClick={() => router.push("/posts")}>Post</button>
        </div>
    )
}

export default Navbar;