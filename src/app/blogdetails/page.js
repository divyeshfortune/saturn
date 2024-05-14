import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
        <Header/>
        <section className='bg-primary py-[6.5rem]'>
            <div className='container'>
                <div className='grid grid-cols-12 items-center'>
                    <div className='col-span-8'>
                        <div className=''>
                            <span className='text-16 text-white pr-10'>Trends</span>
                            <span className='text-16 text-white pr-7 border-r border-solid border-white'>18 Hours ago</span>
                            <span className='text-16 text-white pl-7'>13 Comments</span>
                        </div>
                        <h2 className='text-white pt-7'>Business from the brink of ruin by optimizing our website....</h2>
                    </div>
                    <div className='flex items-center justify-center gap-6 col-span-4'>
                        <Image
                            src="/images/silicaman.png"
                            alt="Avatar"
                            width={0}
                            height={0}
                            layout="responsive"
                            quality={100}
                            sizes="100vh"
                            className="bg-no-repeat bg-contain inline-block !w-[5.1875rem] !h-[5.1875rem]"
                        ></Image>
                        <div className=''>
                            <span className='text-22 text-white'>Silicaman</span>
                            <p className='text-xl text-white'>Author</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className=''>
            <div className='container'>
                <div>
                <Image
                    src="/images/blog-details.jpg"
                    alt="blog-details"
                    width={0}
                    height={0}
                    layout="responsive"
                    quality={100}
                    sizes="100vh"
                    className="bg-no-repeat bg-contain rounded-[1.875rem]"
                ></Image>
                </div>
            </div>
        </section>
    </>
  )
}

export default page