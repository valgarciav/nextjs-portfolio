"use client";
import React, {useTransition, useState, startTransition}  from 'react'
import Image from "next/image"
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className= "list-disc pl-2">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>React</li>
                <li>PostgreSQL</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className= "list-disc pl-2">
                <li>Full Stack Developer Professional Certificate, NC State University</li>
                <li>Foundations of Digital Marketing, Google Courses</li>
                <li>AA, Wake Technical College</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className= "list-disc pl-2">
                <li>IT Assistant, Marcari Russotto Spencer & Balaban, Law Firm</li>
                <li>Regulatory Compliance Specialist, SCRAM / LMG Holdings</li>
                <li>Teller, Wells Fargo</li>
            </ul>
        ),
    },
];
const About =() => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

  return (
        <section className='text-white' id="about">
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image 
                src='/image/neon.jpeg'
                alt="neon image" 
                width={700} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                    About Me
                    </h2>
                    <p className='text-base md:text-lg'> I am a full stack developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Node JS, Express, PostgrSQL, HTML, CSS, Git and Python. I am always looking for opportunities to expland my knowledge and skill set as well as collaborating with other creators and developers to create amazing applications.</p>
                    <div className='flex flex-row mt-8'>
                        <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}
                        >
                        {" "}
                        Skills{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}
                        >
                        {" "}
                        Education{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experience")} 
                        active={tab === "experience"}
                        >
                        {" "}
                        Experience{" "}
                        </TabButton>
                    </div>
                        <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}                        
                        </div>                
                    </div>
            </div>
        </section>
    
  );
};

export default About;