import Link from "next/link"

const articles = [
    {
        title:"the delhi trip & visit to ngma",
        content:`(draft)it was late november 2023, i got into tcs winter school at iitd, the school went good and it ended with a trip around delhi with our
        faculty advisor, got the chance to visit ngma(any art gallery for the first time), each floor had different but soothing vibes, as we reached the third floor
        it was filled with rabindranath tagore paintings, i did not know he was a painter too! and apparently all of his paintings had a vibe that i could not beleive is 
        mainstream, something that id fw.
        `
    },
    {
        title:"my hate and love for pop culture",
        content:`(draft)what is common between indian mid-aged aunties and gen-z teens, they praise some other human as god, for the aunties it's some god-man who claims that
        he has been sent by the god himself and he talks to god on a daily basis and on the other hand for gen-z it's some pop star, lana, taylor, charliexcx to name a few.
        the two spheres are different but exhibit similar energies at the same time.
        `
    }
]

export default function Page(){
    return(
        <div className="font-mono m-6 flex flex-col space-y-6">
            <div className="text-xl hover:underline"><Link href='/'>home</Link></div>
            <div className='flex flex-row space-x-14'>
            <div className="w-1/2">
            <div className="text-xl py-2">music</div>  
            <iframe className="border-radius:12px" src="https://open.spotify.com/embed/playlist/7kZ7kWfvXeFTy8zyDKqIJF?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="w-1/2">
             <div className="text-xl py-2">amusings</div> 
             <div className="flex flex-col space-y-3">
             {
                articles.map((article,idx)=>(
                    <div key={idx}> 
                        <div className="text-xl">{article.title}</div>
                        <div className="text-sm">{article.content}</div>
                    </div>
                ))
             }
             </div>
            </div>
        </div>
        <div>
            <div className="text-xl">the spheres and collision theory</div>
            <div className="text-sm">tbw</div>
        </div>
        </div>
    )
}