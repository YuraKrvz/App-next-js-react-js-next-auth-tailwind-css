import Image from 'next/image'
import reactimg from '../public/assets/projects/reactimg.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import React from "react";

const reactjs = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={reactimg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>React js</h2>
          <h3>A JavaScript library for building user interfaces</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Overview</p>
          <h2>React-js</h2>
          <p>
            Declarative React makes it painless to create interactive UIs. Design simple views for
            each state in your application, and React will efficiently update and render just the
            right components when your data changes. Declarative views make your code more
            predictable and easier to debug. Component-Based Build encapsulated components that
            manage their own state, then compose them to make complex UIs. Since component logic is
            written in JavaScript instead of templates, you can easily pass rich data through your
            app and keep state out of the DOM. Learn Once, Write Anywhere We don’t make assumptions
            about the rest of your technology stack, so you can develop new features in React
            without rewriting existing code. React can also render on the server using Node and
            power mobile apps using React Native.
          </p>
          <Link href='/#references'>
            <button className='px-8 py-2 mt-4 mr-8'>Back</button>
          </Link>
          <Link href='/'>
            <button className='px-8 py-2 mt-4'>Home</button>
          </Link>
          <a href='https://reactjs.org/' className='px-8 py-2 mt-4'>
            <button className='px-8 py-2 mt-4'>React js</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>About react</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Declarative
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Component-Based
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Write Anywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default reactjs
