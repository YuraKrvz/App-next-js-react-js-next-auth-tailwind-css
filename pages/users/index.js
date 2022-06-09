import Link from 'next/link'

import MainLayout from '../../components/MainLayout'

const Users = ({ users }) => {
  return (
    <MainLayout>
      <div id='about' className='w-full md:h-screen pt-2 p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-1 gap-8'>
          <div className='col-span-2 mt-10'>
            <div className='text-lg mt-10'>
              <p className='text-xl md:mt-10 lg:mt5 tracking-widest text-blue-400'>
                Static Site Generation
              </p>
              <h2 className='py-4'>If you export getStaticProps</h2>
              <p>
                If you export a function called getStaticProps (Static Site Generation) from a page,
                Next.js will pre-render this page at build time using the props returned by
                getStaticProps.
              </p>
              <ul>
                {users.map((user) => (
                  <li className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 mt-3 bg-slate-50'>
                    <Link href={`/users/${user.id}`}>
                      <a>
                        <div className='grid grid-cols-1'>
                          <div className='m-auto flex justify-between'>
                            <p className='font-medium text-center'>id: {user.id}</p>&nbsp;
                            <p>username: {user.username}</p>&nbsp;
                            <p>name: {user.name}</p>&nbsp;
                            <p>web: {user.website}</p>&nbsp;
                            <p>email: {user.email}</p>&nbsp;
                            <p>phone: {user.phone}</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Users
export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  return {
    props: { users },
  }
}
