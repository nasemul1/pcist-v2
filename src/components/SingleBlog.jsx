import React from 'react'
import img from '../assets/hero.jpg'
import profile from '../assets/profile.jpg'

const SingleBlog = () => {
  return (
    <div className="w-full lg:w-[85%] mx-auto pt-20 px-5 lg:px-0">
      <div className="mx-auto">
        {/* Blog Image */}
        <img
          src={img}
          alt="Blog banner"
          className="rounded-xl w-full h-[40vh] lg:h-[60vh] object-cover mb-8"
        />

        {/* Blog Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Loft Office With Vintage Decor For Creative Working
        </h1>

        {/* Blog Content */}
        <div className="text-lg leading-8 text-gray-800">
          <p>
            <strong className="font-semibold">It's no secret</strong> that the digital
            industry is booming. From exciting startups to global brands, companies are
            reaching out to digital agencies, responding to the new possibilities available.
          </p>
          <p className="mt-4">
            However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi illum sunt repellendus? Ex quibusdam blanditiis voluptate eaque sit officia in expedita nam a ea assumenda unde ad earum, repudiandae, debitis nesciunt ipsum quisquam iusto adipisci optio voluptatem reiciendis officiis, animi iste! Eveniet quisquam labore at doloribus aliquid, nostrum hic dignissimos delectus? Dolorum molestias eligendi numquam laborum assumenda alias dolores iure quaerat enim, qui quas earum? Aliquam eos repellendus quaerat, non at architecto autem sunt iure nesciunt dolor nostrum cumque iste nemo quis cupiditate soluta itaque. Sed consequatur minus, perferendis non obcaecati beatae nam, aperiam porro dolor a, possimus quibusdam eius? <br /><br /> Sed consequatur minus, perferendis non obcaecati beatae nam, aperiam porro dolor a, possimus quibusdam eius? Sed consequatur minus, perferendis non obcaecati beatae nam, aperiam porro dolor a, possimus quibusdam eius?
          </p>
        </div>
        <div className='mt-8 p-5 border-t-2 border-orange-500 w-full'>
          <div className='flex items-center'>
            <img className='rounded-full w-20' src={profile} alt="" />
            <div className='ml-5'>
              <h1 className='text-xl font-semibold'>John Doe</h1>
              <p className='text-gray-500'>Creative Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog