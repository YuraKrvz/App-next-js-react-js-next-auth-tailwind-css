import ReferencesItem from './ReferencesItem'

import nextImg from '../public/assets/projects/jsnext.png'
import nextAuth from '../public/assets/projects/nextAuth.png'
import r from '../public/assets/projects/reactimg.png'
import tw from '../public/assets/projects/tailwind.png'

const References = () => {
  return (
    <div id='references' className='w-full pt-5 '>
      <div className='max-w-[1240px] mx-auto px-2 py-16 h-full'>
        <p className='text-xl tracking-widest uppercase text-blue-400'>References</p>
        <h2 className='py-4'>Technology in detail</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ReferencesItem title='Next-js' backgroundImg={nextImg} projectUrl='/jsnext' />
          <ReferencesItem title='Next-auth' backgroundImg={nextAuth} projectUrl='/nextAuth' />
          <ReferencesItem title='React-js' backgroundImg={r} projectUrl='/reactjs' />
          <ReferencesItem title='Tailwind css' backgroundImg={tw} projectUrl='/tailwindpage' />
        </div>
      </div>
    </div>
  )
}

export default References
