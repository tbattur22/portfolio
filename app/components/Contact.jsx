import React, {useState} from 'react'
import emailjs from '@emailjs/browser';
import * as EmailValidator from 'email-validator';
import {motion} from 'motion/react'
import { assets } from '@/assets/assets';
import Image from 'next/image';
// import { useForm } from 'react-hook-form';

const ContactMe = () => {
    const [result, setResult] = useState('');

    let templateParams = {
        to_name: 'Battur',
        from_name: 'My Portfolio',
        reply_to: '',
        message: '',
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending...');

        const formData = new FormData(event.target);
        console.log(`onSubmit(): form data`,formData);
        console.log(`name: ${formData.get("name")}`);
        templateParams.from_name = formData.get("name");
        templateParams.reply_to = formData.get("email");
        templateParams.message = formData.get("message");

        if (!EmailValidator.validate(templateParams.reply_to)) {
            console.log(`Invalid email provided!`,templateParams.reply_to);
            setResult('Invalid email address!');
            return false;
        }

        emailjs
        .send('service_4eene7n', 'template_j2x28pf', templateParams, {
            publicKey: 'jQZvCOfAs3m6xqsdU',
        })
        .then(
            (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setResult("Successfully sent the message.");
            },
            (err) => {
            console.log('FAILED...', err);
            setResult("Failed to send the message.");
            },
        );
    }

  return (
    <div id='contact' className='w-full px-[12%] scroll-mt-35 bg-[url("/
    footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
        <motion.h4
        initial={{y: -20,opacity: 0}}
        whileInView={{y: 0,opacity: 1}}
        transition={{delay: 0.3, duration: 1}}
        
        className='text-center mb-2 text-lg font-Ovo'>Connect with me</motion.h4>
        <motion.h2
        initial={{y: -20,opacity: 0}}
        whileInView={{y: 0,opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}
        
        className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}
        
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I'd love to hear from you! If you have any questions, comments or feedback
            please use the form below.
        </motion.p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-(--auto-grid-temp-cols) gap-6 mt-10 mb-8'>
                <input type="text" placeholder='Enter your name' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90' name="name" />
                <input type="email" placeholder='Enter your email' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90' name="email"/>
            </div>
            <textarea rows="6" placeholder='Enter your message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white mb-6 dark:bg-dark-hover/30 dark:border-white/90' name="message"></textarea>

            <button type="submit"
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
            text-white rounded-full mx-auto hover:bg-black duration-500
            dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover'
            >Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></button>

            <p className='mt-4'>{result}</p>
        </form>    
    </div>
  )
}

export default ContactMe