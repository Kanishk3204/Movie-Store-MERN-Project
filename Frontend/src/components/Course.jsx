import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className=' items-center text-center justify-center py-10 mt-14'>
                <h1 className=' text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className=' text-blue-400'>here :)</span></h1>
                <p className='mt-12'>Explore our diverse library featuring a wide range of genres and titles, curated to cater to every movie enthusiast's taste. Whether you're in the mood for action-packed thrillers, heartwarming dramas, or laugh-out-loud comedies, our collection has something for everyone. Dive into a world of cinematic entertainment with our easy-to-use platform, where you can rent and enjoy movies with just a few clicks. Start your movie night now and experience the magic of cinema like never before!</p>
                <Link to={'/'}>
                <button className=' mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-950 duration-300'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    list.map((item) => (
                        <Cards item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Course
