import Link from "next/link" 
import Image from "next/image"  

const Interests = [
  {
    heading:"interests : ",
    content:"startups, edtech, gig economy"
  },
  {
    heading:"dev stack i know : ",
    content:"nextjs(along with prisma, tailwind, postgresql), solidity"
  },
  {
    heading:"deeptech that excites me : ",
    content:"applied crypto(zk & privacy), matching algorithms"
  },
  {
    heading:"been at : ",
    content:"undergrad @iitr, tcs winter school @iitd" 
  },
  {
    heading:"other things that intrigue me : ",
    content:"(setting up new)planned cities, (setting up new)educational institutions" 
  },
]

const pages = ['two-cents','non-work']  

const contacts = [
  {
    where:'linkedin',
    link:'https://www.linkedin.com/in/kamalsharma01/' 
  },
  {
    where:'twt',
    link:'https://x.com/0xmaxlad'
  }
]

export default function Home() {
  return (
    <div className="m-6 font-mono"> 
    <div className="text-2xl py-1">kamal sharma here</div> 

    <div className="flex flex-row">
      {pages.map((page,idx) => (    
        <div className='px-2 hover:underline w-fit' key={idx}><Link href={`/${page}`}>{page}</Link></div> 
      ))}
      </div>

      <Image src='/self.jpeg' alt="Kamal" width={220} height={180} className="py-1"></Image> 
      <div className="flex flex-col"> 
        <div className="text-base">currently : building <Link href="https://www.sumlearn.com/" className="hover:underline">sumlearn.com</Link>  </div>     
      </div>
      {Interests.map((interest,idx) => (
        <div className="flex flex-col py-2" key={idx}> 
          <div className="text-base">{interest.heading}</div>
          <div className="text-sm">{interest.content}</div>
        </div>
      ))}  

      <div className="flex flex-row py-2">
        {
          contacts.map((contact,idx) => (
            <div className="px-2 hover:underline w-fit" key={idx}> 
              <Link href={contact.link} passHref legacyBehavior>
              <a target="_blank">{contact.where}</a> 
              </Link>
            </div>
          ))
        }
      </div> 

      <div>
        mail kamal@sumlearn.com kamalonlywork@gmail.com
      </div>

    </div> 
  );
}
