'use client'

import { Blogs } from '../../../../utils/data'
import {useParams} from 'next/navigation'

export default function Blog(){
    const params = useParams()
    const blog = Blogs.find((blog) => blog.title.replaceAll(' ','-') === params.blog)  
    return(
        <div className='my-2 max-w-3xl'>
            <h1>{blog?.title}</h1>
            <div className='text-xs mb-4'>{blog?.preview}</div> 
            <p>{JSON.stringify(blog?.content)}</p>
        </div>
    )
}