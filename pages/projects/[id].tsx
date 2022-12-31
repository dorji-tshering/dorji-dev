import { useRouter } from 'next/router';
import Projects from "../../components/utils/Project";
import Link from 'next/link';
import { BiLinkAlt } from 'react-icons/bi';
import { TbBrandGithub } from 'react-icons/tb';
import { IoMdArrowBack } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import Head from 'next/head';

const getRepoLs = async(repoName: string) => {
    let repoURL = "https://api.github.com/repos/dorji-tshering";

    const ls = await fetch(`${repoURL}/${repoName}/languages`);   
    const lsStats = await ls.json(); 

    return lsStats;
}

const ProjectDetails = () => {
    const [languagePer, setLanguagePer] = useState<{name: string, percentage: number}[]>([]);
    const router = useRouter();
    const project = Projects().filter((project) => project.id === router.query.id )[0];

    let colors = ['#FFF123', '#b07219', '#438eff', '#e34c26', '#76d275']

    useEffect(() => {
        if(router.query.id) {
            getRepoLs(project.repoName).then((res) => {
                const totalPtsArr: number[] = Object.values(res);
                let sumTotalPts = 0;
                totalPtsArr.forEach((pts) => {
                    sumTotalPts += pts;
                });

                let temp: {name: string, percentage: number}[] = [];
                Object.keys(res).forEach((lang) => {
                    let lp = {
                        name: lang,
                        percentage: Math.round( ((res[lang] * 100) / sumTotalPts) * 10 + Number.EPSILON ) / 10
                    }
                    temp.push(lp);
                });
                setLanguagePer(temp);
            });
        }
    }, [router.query.id]);

    return (
        <div className="mt-[62px] md:mt-0 py-12 md:py-16 px-6 sm:px-10 md:p-14 lg:px-24
            md:flex md:flex-col md:justify-between">
            <Head>
                <title>Dorji &bull; {(router.query.id as string)}</title>
            </Head>
            {
                project && 
                <>
                    <section>
                        <div className="flex items-center flex-wrap relative pr-11">
                            <h1 className="mb-4 text-xl ubuntu md:text-2xl mr-6 font-[600] dark:text-white">{project.title}</h1>
                            <p className="mb-4 text-xs bg-theme px-3 py-1 text-white rounded-sm">{project.category}</p>
                            <button 
                                className="absolute right-0 top-0 text-xl dark:text-gray-300 h-8
                                    w-8 md:h-10 md:w-10 flex justify-center items-center rounded-full bg-lightBg
                                    hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                                onClick={() => router.back()}><IoMdArrowBack /></button>
                        </div>
                        <div className="flex mb-5 text-sm">
                            <Link 
                                className="flex items-center mr-6 text-gray-500 dark:text-gray-400 hover:text-theme 
                                    transition-all duration-300 ease-out" 
                                href={project.github}
                                target="_blank">
                                <TbBrandGithub className="mr-1"/>Github</Link>
                            {
                                project.hostedLink && 
                                <Link 
                                    className="flex items-center text-gray-400 hover:text-theme 
                                        transition-all duration-300 ease-out" 
                                    href={project.hostedLink}
                                    target="_blank">
                                    <BiLinkAlt className="mr-1"/>Visit Site</Link>
                            }
                        </div>
                        <div className="flex mb-6 flex-wrap">
                            {
                                project.techStacks.map((stack, idx) => (
                                    <p 
                                        className="text-sm dark:text-gray-200 mb-4 mr-4 border bg-gray-100 dark:bg-transparent dark:border-gray-600 rounded
                                            px-2 py-[2px]" 
                                        key={idx}>{stack}</p>
                                ))
                            }
                        </div>
                        <div className="mb-10">
                            <h3 className="text-xl mb-3 text-black dark:text-gray-400 font-[700]">Description</h3>
                            <p className="leading-6">{project.description}</p>
                        </div>
                        {
                            project.features.length > 0 
                            && 
                            <div className="mb-10">
                                <h3 className="text-xl text-black dark:text-gray-400 mb-3 font-[700]">Features</h3>
                                <ul className="leading-7">
                                    {
                                        project.features.map((feature, idx) => 
                                            <li 
                                                className="pl-4 relative before:content-[''] before:h-[6px] before:w-[6px] before:bg-gray-500
                                                    before:inline-block before:rounded-full before:absolute
                                                    before:top-[11px] before:left-0" 
                                                key={idx}>{feature}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        }
                    </section>
                    <section>
                        {
                            languagePer.length > 0 ?
                            <>
                                <h3 className="text-xl mb-3 text-black dark:text-gray-400 font-[700]">Languages</h3>
                                <div className="flex flex-wrap">
                                    {
                                        languagePer.map((lang, idx) => (
                                            <p 
                                                className="flex items-center mr-3 text-sm mb-3"
                                                key={idx}><GoPrimitiveDot className="mr-2" color={colors[idx]}/>
                                                    <span className="dark:text-gray-100">{lang.name}</span> <span className="ml-2 font-[600] text-black dark:text-gray-400">{lang.percentage}%</span>
                                            </p>
                                        ))
                                    }
                                </div>
                            </>
                            :
                            <p className="text-gray-400">Loading language stats...</p>
                        }
                    </section>
                </>
            }
        </div>
    )
}

export default ProjectDetails