export default function Error() {
  return (
    <>
      <div id='about' className='w-full md:h-screen pt-2 p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='text-lg text-orange-700'>404 | This page could not be found.</p>
          </div>
        </div>
      </div>
    </>
  )
}
