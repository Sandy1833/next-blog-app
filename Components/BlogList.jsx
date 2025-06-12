import { blog_data } from '@/assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';

const BlogList = () => {

  const [menu,setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async ()=>{
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  }

  useEffect(() => {
    fetchBlogs();
  }, [])
  

  return (
    <div>
        <div className='flex justify-center lg:gap-6 md:gap-6 sm:gap-2 my-10'>
            <button onClick={()=>setMenu('All')} className={menu==="All"?'bg-black text-white py-1 px-4 rounded-sm cursor-pointer':"text-black py-1 px-4 rounded-sm cursor-pointer"}>All</button>
            <button onClick={()=>setMenu('Technology')} className={menu==="Technology"?'bg-black text-white py-1 px-4 rounded-sm cursor-pointer':"text-black py-1 px-4 rounded-sm cursor-pointer"}>Technology</button>
            <button onClick={()=>setMenu('Startup')} className={menu==="Startup"?'bg-black text-white py-1 px-4 rounded-sm cursor-pointer':"text-black py-1 px-4 rounded-sm cursor-pointer"}>Start-up</button>
            <button onClick={()=>setMenu('Lifestyle')} className={menu==="Lifestyle"?'bg-black text-white py-1 px-4 rounded-sm cursor-pointer':"text-black py-1 px-4 rounded-sm cursor-pointer"}>Lifestyle</button>
        </div>
        <div className='flex flex-wrap justify-around gap-x-6 gap-y-10 mb-16 xl:mx-24'>
            {blogs.filter((item)=> menu==="All"?true:item.category===menu).map((item,index)=>{
                return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
            })}
        </div>
    </div>
  )
}

export default BlogList