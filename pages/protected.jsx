import { getSession, signIn, useSession } from 'next-auth/react'
import React from 'react'

const Protected = () => {
  const { data: session, status } = useSession()
  if ('status' === 'unauthenticated') {
    return <p>'you are not Unauthenticated'</p>
  }
  return (
    <>
      <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <>
            {session ? (
              <p>{session.user.email}</p>
            ) : (
              <div className='flex flex-col items-center'>
                <p className='text-pink-600 bg-red-100 rounded-lg p-1'>You are unauthenticated</p>
                <button
                  className='ml-10 mr-10 w-full p-0.5 text-gray-100 mt-2'
                  onClick={() => signIn()}
                >
                  sign In
                </button>
              </div>
            )}
          </>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
//protected serverside rendering
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx)

  // if(!session){
  //     return {
  //         redirect: {
  //             destination: '/'
  //         }
  //     }
  // }
  return {
    props: { session },
  }
}

export default Protected
