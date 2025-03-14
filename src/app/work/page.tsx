import Link from "next/link"
import {Work,Projects} from '../../../utils/data' 

export default function Page() {
    return (
        <div className='max-w-3xl mx-auto py-12 px-4'>
            {/* Header Section */}
            <div className='mb-12 text-center'>
                <h1 className='text-4xl font-bold mb-2'>Kamal</h1>
                <p className='text-gray-600'>Frontend Engineer</p>
            </div>

            {/* Work Experience Section */}
            <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-6 border-b pb-2'>Work Experience</h2>
                {
                    Work.map((w,i)=>(
                        <div key={i}>
                            <h3 className='text-xl font-semibold'>{w.title}</h3>
                            <p className='text-gray-600'>{w.timeline}</p>
                            <ul className='list-disc ml-6 mt-2 text-gray-700'>
                                {w.content.map((c,j)=>(
                                    <li key={j}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </section>

            {/* Projects Section */}
            <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-6 border-b pb-2'>Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        Projects.map((proj,i)=>(
                            <div key={i} className='w-full border rounded-lg p-4'>
                            <h3 className='text-xl font-semibold'>{proj.title} <Link href={proj.link} className='hover:underline'>Link</Link></h3>
                            <iframe src={proj.link}></iframe>
                            <p className='text-gray-600 mt-2'>{proj.description}</p>
                            <div className='mt-2 flex flex-wrap gap-2'>
                                {proj.tech.map((t,j)=>(<span key={j} className='bg-gray-500 px-2 py-1 rounded text-sm'>{t}</span>))}
                        </div>
                    </div>
                        ))
                    }
                </div>
            </section>

            {/* Education Section */}
            <section className='mb-12'>
                <h2 className='text-2xl font-bold mb-6 border-b pb-2'>Education</h2>
                <div>
                    <h3 className='text-xl font-semibold'>Bachelor of Technology ME</h3>
                    <p className='text-gray-600'>IIT Roorkee, 2016-2020</p>
                </div>
            </section>

            {/* Technical Skills Section */}
            <section>
                <h2 className='text-2xl font-bold mb-6 border-b pb-2'>Technical Skills</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    <div>
                        <h3 className='font-semibold mb-2'>Languages</h3>
                        <ul className='text-gray-700'>
                            <li>JavaScript/TypeScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold mb-2'>Frameworks</h3>
                        <ul className='text-gray-700'>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Redux</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold mb-2'>Tools</h3>
                        <ul className='text-gray-700'>
                            <li>Git</li>
                            <li>Docker</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}