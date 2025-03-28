import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Work = ({ isDarkMode }) => {
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
                showcasing my expertise in front-end development.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}

                className='grid grid-cols-(--auto-grid-temp-cols) my-10 gap-5 dark:text-black'>
                {workData.map((project, i) => (
                    <div key={i} className="flex flex-col">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            key={i}
                            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg
                relative cursor-pointer group'
                            style={{ backgroundImage: `url(${project.bgImage})`, containerType: 'size' }}>
                            <div className='bg-white w-10/12 rounded-md absolute bottom-1/3 @md:bottom-1/5 lg:bottom-1/6
                    left-1/2 -translate-x-1/2 py-3 px-5 flex flex-1/3 items-center
                    justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-xs text-gray-700'>{project.description}</p>
                                </div>
                            </div>
                        </motion.div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col">
                                {project.url &&
                                    <a id="project_url" href={project.url} target="_blank"
                                        className="font-bold text-blue-600 dark:text-blue-500 hover:underline">
                                        Project link
                                    </a>
                                }
                                {project.src ?
                                    <a id="project_url" href={project.src} target="_blank"
                                        className="font-bold text-blue-600 dark:text-blue-500 hover:underline">
                                        Github source
                                    </a>
                                    : <span className="text-black dark:text-white">{project.status}</span>
                                }
                            </div>
                        </div>
                    </div>
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