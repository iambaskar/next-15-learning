import React from 'react'
import Layout from '../components/Layout'

export default function page() {
  return (
   <Layout>
     <div className='bg-green-300 min-h-screen w-full flex flex-col items-center justify-center py-[72px]'>
        <div className='w-1/2'>
        <h1 className='text-[32px] font-bold'>About Me</h1>
        <p className='text-lg py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae error laboriosam et harum vero ipsam, ut doloremque temporibus, repellendus assumenda, neque libero dolorum alias animi excepturi deserunt qui repellat itaque.</p>
        <p className='text-lg py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae error laboriosam et harum vero ipsam, ut doloremque temporibus, repellendus assumenda, neque libero dolorum alias animi excepturi deserunt qui repellat itaque.</p>
        </div>
    </div>
   </Layout>
  )
}
