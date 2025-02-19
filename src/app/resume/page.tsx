import Link from "next/link"

const Contacts = [
    {
        platform:'Gmail',
        contact:'mailto:kamalonlywork@gmail.com',
    },
    {
        platform:'LinkedIn',
        contact:"https://www.linkedin.com/in/kamalsharma01/",
    },
    {
        platform:'Twitter/X',
        contact:"https://x.com/xmaxlad",
    },
    {
        platform:'Github',
        contact:"https://github.com/xmaxlad",
    }
]

export default function Page(){
    return(
        <div className='max-w-xl flex mx-auto'>
            <div>
                <div className='text-xl mx-auto'>Kamal</div>
                <div className='mx-auto'>Fullstack developer</div>
                <div className='flex flex-row gap-x-2'>
                    {Contacts.map((c)=><div>
                        <Link href={c.contact}>{c.platform}</Link>
                    </div>)}
                </div>
            </div>
        </div>
    )
}