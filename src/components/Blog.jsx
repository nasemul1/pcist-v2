import React from 'react'
import { Link } from 'react-router-dom';
import img from '../assets/hero.jpg'

const Blog = () => {

    const contents = [
        {
          img: img,
          author: "John Doe",
          title: "Search and Discovery",
          desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
        },
        {
          img: img,
          author: "John Doe",
          title: "Grow in a beautiful area",
          desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
        },
        {
          img: img,
          author: "John Doe",
          title: "Last visits in US",
          desc: "Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.",
        },
        {
          img: img,
          author: "John Doe",
          title: "Grow in a beautiful area",
          desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
        },
      ];

  return (
    <div className='w-full flex justify-center py-15'>
        <div className='px-5 lg:px-5 w-full lg:w-[85%]'>
            <div className='mb-5 flex flex-col items-center gap-2'>
                <h3 className='text-[20px] text-center font-semibold'>BLOGS</h3>
                <hr className='w-[140px] border border-orange-500'/>
            </div>
            <div className='w-full flex flex-wrap justify-center gap-5'>
                {
                    contents.map((content, index) => (
                        <div key={index} className="w-full md:w-[260px] shadow-xl rounded-lg p-3">
                            <img className='h-[150px] w-full rounded-sm' src={content.img} alt="" />
                            <p className='mt-2 text-xs'>{content.author}</p>
                            <h3 className='text-xl font-semibold'>{content.title}</h3>
                            <p className='text-sm'>{content.desc.slice(0, 150)}...</p>
                            <Link className='mt-4 inline-block text-sm px-5 py-1.5 bg-orange-400 rounded-sm'>Read More</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blog