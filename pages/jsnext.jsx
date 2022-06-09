import Image from 'next/image'
import nextImg from '../public/assets/projects/jsnext.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const Jsnext = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={nextImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>The React Framework for Production</h2>
          <h3>Next JS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Overview</p>
          <h2>Framework</h2>
          <p className='w-1/2'>
            Next.js is a flexible React framework that gives you building blocks to create fast web
            applications. But what exactly do we mean by this? Let’s spend some time expanding on
            what React and Next.js are and how they can help. Building Blocks of a Web Application
            There are a few things you need to consider when building modern applications. Such as
          </p>
          <Link href='/#references'>
            <button className='px-8 py-2 mt-4 mr-8'>Back</button>
          </Link>
          <Link href='/'>
            <button className='px-8 py-2 mt-4'>Home</button>
          </Link>
          <a href='https://nextjs.org/' className='px-8 py-2 mt-4'>
            <button className='px-8 py-2 mt-4'>Next JS</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>There are a few things:</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> User Interface
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Routing
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Data Fetching
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Rendering
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Integrations
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Infrastructure
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> And etc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jsnext
