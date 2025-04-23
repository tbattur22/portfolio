'use client';

import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

const Work = ({ isDarkMode }) => {
    const [pathname, setPathname] = useState('/');

    useEffect(() => {
        const path = window.location.pathname;
        console.log(`pathname in useEffect set to `, path);
        setPathname(path);
    }, []);
    console.log(`pathname 22`, pathname);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}

            id='work' className='w-full px-[12%] scroll-mt-35'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}

                className='text-center mb-2 text-lg font-Ovo'>My portfolio</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}

                className='text-center text-5xl font-Ovo'>My latest work</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}

                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my web development portfolio! Explore a collection of projects
                showcasing my expertise in both backend and front-end development.
            </motion.p>

            <h3 className="text-2xl font-semibold text-center mb-10">Projects</h3>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}

                className='grid grid-cols-(--auto-grid-temp-cols) my-10 gap-5 dark:text-black'>

                {workData.map((project, i) => (
                    <Card key={i} className="w-80">
                        <CardContent className="p-4">
                            <div className="h-32 bg-gray-300 rounded mb-4"><img src={`${pathname}${project.bgImage}`} className="w-full h-full object-cover" /></div>
                            <h4 className="font-semibold">{project.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                            <p className="text-sm text-gray-500 mb-4">Technologies: {project.technologies}</p>
                            <div className="flex gap-2">
                                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                                    {project.url ? (
                                        <a href={project.url} target="_blank">Demo</a>
                                    ) : (
                                        <span>Pending</span>
                                    )}
                                </Button>
                                <Button variant="outline">
                                    {project.src ? (
                                        <a href={project.src} target="_blank">Code</a>
                                    ) : (
                                        <span>Pending</span>
                                    )}

                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}

            </motion.div>

            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}

                href="" className='w-max flex items-center justify-center gap-2
        text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10
        mx-auto my-20 hover:bg-light-hover dark:text-white dark:border-white dark:hover:bg-dark-hover'>
                Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow'
                    className='w-4' />
            </motion.a>
        </motion.div>
    )
}

export default Work