"use client"
import React, { useEffect, useRef } from "react"; // Use these directly
import Typed from 'typed.js';
import { Button } from "@/components/ui/button"
import TopBlogsSection from "@/components/TopBlogsSection";


const blogs = [
  {
    image: 'https://images.pexels.com/photos/7504824/pexels-photo-7504824.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Blog Post 1',
    excerpt: 'This is a short description of blog post 1.',
    link: '/blog/post-1',
  },
  {
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Blog Post 2',
    excerpt: 'This is a short description of blog post 2.',
    link: '/blog/post-2',
  },
  {
    image: '/img.png',
    title: 'Blog Post 3',
    excerpt: 'This is a short description of blog post 3.',
    link: '/blog/post-3',
  },
];



export default function Home() {

  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ['<i>Coding</i>.', ' Web Development.', 'Tailwind'],
        typeSpeed: 50,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);


  return (
    <>
    <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
        <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
          A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
        </p>
        <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
        </div>
      </div>
      <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
      </div>
    </section>

    <section className="container px-4 py-16 mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
        Our Pricing Plans
      </h2>
      <div className="flex flex-wrap justify-center">
        {/* Basic Plan */}
        <div className="w-full max-w-sm p-6 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform hover:scale-105 border hover:border-purple-500">
          <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200">Basic</h3>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">$19/month</p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 1</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 2</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 3</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 4</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 5</span>
            </li>
          <Button variant="outline" className='flex justify-center m-auto hover:border-purple-500'>Button</Button>
          </ul>
        </div>

        {/* Standard Plan */}
        <div className="w-full max-w-sm p-6 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform hover:scale-105 border hover:border-purple-500">
          <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200">Standard</h3>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">$49/month</p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 1</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 2</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 3</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 4</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 5</span>
            </li>
          <Button variant="outline" className='flex justify-center m-auto hover:border-purple-500'>Button</Button>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="w-full max-w-sm p-6 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition-transform hover:scale-105 border hover:border-purple-500">
          <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200">Premium</h3>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-400">$99/month</p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 1</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 2</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 3</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 4</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 5</span>
            </li>
          <Button variant="outline" className='flex justify-center m-auto hover:border-purple-500'>Button</Button>
          </ul>
        </div>
      </div>
    </section>


    <section className="py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold sm:text-4xl">
        What Our Clients Say
      </h2>
      <p className="mt-4 text-lg leading-6 ">
        Hear from our satisfied customers.
      </p>
    </div>
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className=" p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 border">
          <p className="text-lg font-medium ">
            This service is amazing! It has changed my life for the better.
          </p>
          <div className="mt-4">
            <p className="text-base font-medium ">John Doe</p>
            <p className="text-sm ">CEO, Company Inc.</p>
          </div>
        </div>
        <div className=" p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 border">
          <p className="text-lg font-medium ">
            Highly recommend to anyone looking for quality and reliability.
          </p>
          <div className="mt-4">
            <p className="text-base font-medium ">Jane Smith</p>
            <p className="text-sm ">CTO, Tech Solutions</p>
          </div>
        </div>
        <div className="p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 border">
          <p className="text-lg font-medium ">
            Exceptional service and support. Five stars!
          </p>
          <div className="mt-4">
            <p className="text-base font-medium ">Alice Johnson</p>
            <p className="text-sm ">Manager, Business Corp.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section>
<div>
      <TopBlogsSection blogs={blogs} />
    </div>
</section>


    </>
  )}


  












