import React from 'react'
import Image from 'next/image'

import workImg from '../public/assets/work-img.jpg'
import next from '../public/assets/skills/next-js-seeklogo.com.svg'

const About = () => {
  return (
    <div id='about' className='w-full pt-10 md:h-screen pt-2 p-2 flex items-center py-16'>
      <div className='max-w-[1240px] pt-12 m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-blue-400'>About Technologies</p>
          <h2 className='py-4'>What i applied</h2>
          <p className='py-2 text-gray-600 '>
            <span class='text-blue-400'>Next.js</span> is a flexible React framework that gives you
            building blocks to create fast web applications.
          </p>
          <p className='py-2 text-gray-600'>
            <span class='text-blue-400'>NextAuth.js </span>
            is a complete open-source authentication solution for Next.js applications. It is
            designed from the ground up to support Next.js and Serverless.
          </p>
          <p className='py-2 text-gray-600'>
            {' '}
            <span class='text-blue-400'>React</span> is a JavaScript library for building
            interactive user interfaces. By user interfaces, we mean the elements that users see and
            interact with on-screen
          </p>
          <p className='py-2 text-gray-600'>
            <span class='text-blue-400'>JavaScript </span>
            often abbreviated JS, is a programming language that is one of the core technologies of
            the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the
            client side for web page behavior, often incorporating third-party libraries. All major
            web browsers have a dedicated JavaScript engine to execute the code on users' devices.
          </p>
          <p className='py-2 text-gray-600'>
            <span class='text-blue-400'>Tailwind CSS </span>
            is a "utility-first" CSS framework that provides a deep catalog of CSS classes and tools
            that lets you easily get started styling your website or application.
          </p>
          <p className='py-2 text-gray-600'>
            <span class='text-blue-400'>GitHub </span>
            Inc. is a provider of Internet hosting for software development and version control
            using Git. It offers the distributed version control and source code management (SCM)
            functionality of Git, plus its own features. It provides access control and several
            collaboration features such as bug tracking, feature requests, task management,
            continuous integration, and wikis for every project.[4] Headquartered in California, it
            has been a subsidiary of Microsoft since 2018
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={workImg} width='350px' height='300px' alt='/' />
        </div>
      </div>
    </div>
  )
}

export default About
