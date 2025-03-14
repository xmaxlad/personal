'use client'

import { Blogs } from "../../../utils/data"
import {useRouter} from 'next/navigation'

export default function Page(){
    const router = useRouter() 
    return(
        <div>
            {Blogs.map((blog,i)=>(
                <div key={i} onClick={()=>{router.push(`/blog/${blog.title.replaceAll(' ','-')}`)}} className='cursor-pointer'> 
                    <h1>{blog.title}</h1>
                    <p>{blog.preview}</p>
                </div>
            ))}
        </div>
    )
}
