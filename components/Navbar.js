"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from './ThemeButton';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';


export default function Navbar() {

    const [progress, setProgress] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
      setProgress(30)

      setTimeout(() => {
        setProgress(70)
      }, 100);

      setTimeout(() => {
        setProgress(100)
      }, 800);

    }, [pathname])

    useEffect(() => {
      setTimeout(() => {
        setProgress(0)
      }, 900);

    }, [])
    
    

    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-50">
             
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
            <div className="container mx-auto flex justify-around items-center">
                <div className="text-2xl font-bold">
                    <Link href="/">AdnanBlog</Link>
                </div>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className='hover:scale-105 hover:font-semibold transition-transform duration-300'>Home</Link>
                    <Link href="/about" className='hover:scale-105 hover:font-semibold transition-transform duration-300'>About</Link>
                    <Link href="/blog" className='hover:scale-105 hover:font-semibold transition-transform duration-300'>Blog</Link>
                    <Link href="/contact" className='hover:scale-105 hover:font-semibold transition-transform duration-300'>Contact</Link>
                    <div className='flex items-center'>
                        <Button className='mx-1' variant="outline">Login</Button>
                        <Button className='mx-1' variant="outline">SignUp</Button>
                        <ModeToggle />
                    </div>
                </div>
                <div className="md:hidden flex gap-3 items-center ml-3">
                    <Sheet>
                                            <ModeToggle /> 
                        <SheetTrigger asChild>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                    </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className='font-bold my-4'>Adnan Blog</SheetTitle>
                                <SheetDescription>
                                    <div className='flex flex-col gap-6'>
                                        <Link href="/">Home</Link>
                                        <Link href="/about">About</Link>
                                        <Link href="/blog">Blog</Link>
                                        <Link href="/contact">Contact</Link>
                                        <div>
                                            <Button className='mx-1 text-xs' variant="outline">Login</Button>
                                            <Button className='mx-1 text-xs' variant="outline">SignUp</Button>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
