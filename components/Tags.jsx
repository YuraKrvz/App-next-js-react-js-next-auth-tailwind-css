import Image from 'next/image'
import Link from 'next/link'

import next from '../public/assets/skills/next-js-seeklogo.com.svg'
import nextAuth from '../public/assets/skills/next-auth.png'
import prot from '../public/assets/skills/prot.png'

const Tags = () => {
  return (
    <div id='Tags' className='w-full lg:h-screen mt-5 pt-2 p-2'>
      <div className='max-w-[1240px] md:mt-12 lg:mt5 mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl md:mt-10 lg:mt5 tracking-widest uppercase text-blue-400'>Tags</p>
        <h2 className='py-4'>What did I practice here?</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={next} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next.JS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={nextAuth} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>next-auth</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/react.png'
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React.js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/Javascript.png'
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/Tailwind.png'
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind css</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/github1.png'
                  width='64px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 hover:text-blue-400 hover:underline  ease-in duration-300 cursor-pointer'>
            <Link href='/protected'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={prot} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Protected page: /protected</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 hover:text-blue-400 hover:underline  ease-in duration-300 cursor-pointer'>
            <Link href='/notfound'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    src='/../public/assets/skills/404.png'
                    width='64px'
                    height='64px'
                    alt='/'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Custom 404 page</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 hover:text-blue-400 hover:underline  ease-in duration-300 cursor-pointer'>
            <Link href='/users'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    src='/../public/assets/skills/server.png'
                    width='64px'
                    height='64px'
                    alt='/'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Static Site Generation and Server-Side Rendering</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                    src='/../public/assets/skills/prettier.png'
                    width='64px'
                    height='64px'
                    alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Prettier code formatter</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tags
