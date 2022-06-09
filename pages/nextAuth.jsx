import Image from 'next/image'
import React from 'react'
import nextAuthImg from '../public/assets/projects/nextAuth.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const nextAuth = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={nextAuthImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Authentication for Next.js</h2>
          <h3>Next-auth</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Overview</p>
          <h2>Next-auth</h2>
          <p>
            Easy Built in support for popular services (Google, Facebook, Auth0, Apple…) Built in
            email / passwordless / magic link Use with any username / password store Use with OAuth
            1.0 & 2.0 services Flexible Built for Serverless, runs anywhere Bring Your Own Database
            - or none! (MySQL, Postgres, MSSQL, MongoDB…) Choose database sessions or JWT Secure web
            pages and API routes Secure Signed, prefixed, server-only cookies HTTP POST + CSRF Token
            validation JWT with JWS / JWE / JWK / JWK Tab syncing, auto-revalidation, keepalives
            Doesn't rely on client side JavaScript
          </p>
          <Link href='/#references'>
            <button className='px-8 py-2 mt-4 mr-8'>Back</button>
          </Link>
          <Link href='/'>
            <button className='px-8 py-2 mt-4'>Home</button>
          </Link>
          <a href='https://next-auth.js.org/' className='px-8 py-2 mt-4'>
            <button className='px-8 py-2 mt-4'>Next auth</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Next-auth are:</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Easy
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Flexible
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Secure
              </p>
            </div>
          </div>
        </div>
        <Link href='/#references'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default nextAuth
