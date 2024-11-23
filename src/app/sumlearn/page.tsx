const content = [
    {
        heading:"one liner",
        body:"cohort based courses that students can actually afford."
    },
    {
        heading:"the idea",
        body:`the three user profiles
        1. educator(eg ang, gilbert strang, aditya verma(dp guy), striver)
        2. mentors(anyone who is working in a company and knows the subject)
        3. learners

        - educators can add their pre recorded video courses on the platform 

        - mentors can fork a course posted by educator and lead it(they can take weekly doubt classed over meeting
        where they can - 
        a. solve any doubts students have
        b. every course has some projects but if 100k students are making the same project, no one can put it into their resume,
        the mentor can tweak a project or provide a new project alltogether.
        c. if the course is of dsa/cp mentors can discuss the cf/leetcode contest after it's done
        the list is endless
        )

        - learners can talk to other students learning the same course via the discussion channel
        `
    },
    {
        heading:"the rationale",
        body:"my rationale here"
    },
    {
        heading:"the market",
        body:"market stats and current funcitoning"
    },
]

export default function Page(){
    return(
        <div className='font-mono m-6'>
            <div className="text-xl">why sumlearn, what do we offer and whats ahead?</div>
            {
                content.map((unit,idx)=>(
                    <div className="py-2" key={idx}> 
                        <div className="text-xl">{unit.heading}</div>
                        <div className="text-sm">{unit.body}</div> 
                    </div>
                ))

            }
        </div>
    )
}