import Link from "next/link" 
import Image from "next/image"  
import { Interests, Pages, Contacts } from "../../utils/data"

export default function Home(){
  return (
    <main className="h-svh"> 
    <div className="text-xl">kamal sharma here</div> 
    <nav className="flex flex-row gap-x-2">
      {Pages.map((page,idx) => (    
        <div className='hover:underline w-fit' key={idx}><Link href={`/${page}`}>{page}</Link></div> 
      ))}
      </nav>
      <Image src='/self.jpeg' alt="Kamal" width={220} height={180} className="py-1"></Image> 
      <div className="flex flex-col"> 
        <div className="text-base">currently : building <Link href="https://www.sumlearn.com/" className="hover:underline">sumlearn.com</Link></div>     
      </div>
      {Interests.map((interest,idx) => (
        <div className="flex flex-col py-2" key={idx}> 
          <div className="text-base">{interest.heading}</div>
          <div className="text-sm">{interest.content}</div>
        </div>
      ))}  
      <div className="flex flex-row py-2">
      find me on
        {
          Contacts.map((contact,idx) => (
            <div className="px-2 hover:underline w-fit" key={idx}> 
              <Link href={contact.link} passHref legacyBehavior>
              <a target="_blank">{contact.where}</a> 
              </Link>
            </div>
          ))
        }
      </div> 
      <div>mail kamal@sumlearn.com kamalonlywork@gmail.com</div> 
    </main>
  );
}
