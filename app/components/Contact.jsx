import React, {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import * as EmailValidator from 'email-validator';
import {motion} from 'motion/react'
import { assets } from '@/assets/assets';
import Image from 'next/image';
// import { useForm } from 'react-hook-form';

const MAIL_STATUS = {
    initial: { status: 'initial', msg: '' },
    pending: { status: 'pending', msg: 'Sending...' },
    success: { status: 'success', msg: 'Successfully sent the message.' },
    failure: { status: 'failure', msg: 'Failed to send the message.' },
    invalid: { status: 'invalid', msg: 'Invalid email address!' }
}
const ContactMe = () => {
    const [result, setResult] = useState(MAIL_STATUS.initial);

    let templateParams = {
        to_name: 'Battur',
        from_name: 'My Portfolio',
        reply_to: '',
        message: '',
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult(MAIL_STATUS.pending);

        const formData = new FormData(event.target);
        templateParams.from_name = formData.get("name");
        templateParams.reply_to = formData.get("email");
        templateParams.message = formData.get("message");

        if (!EmailValidator.validate(templateParams.reply_to)) {
            console.log(`Invalid email provided!`,templateParams.reply_to);
            setResult(MAIL_STATUS.invalid);
            return false;
        }

        emailjs
        .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, templateParams, {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        })
        .then(
            (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setResult(MAIL_STATUS.success);
            },
            (err) => {
            console.log('FAILED...', err);
            setResult(MAIL_STATUS.failure);
            },
        );
    }

    let mail_status = null;
    if (result === MAIL_STATUS.initial) {
        mail_status = <p className='mt-4'>{result.msg}</p>
    } else if (result === MAIL_STATUS.pending) {
        mail_status = <p className='mt-4'>{result.msg}</p>
    } else if (result === MAIL_STATUS.success) {
        mail_status = <p className='mt-4 text-green-400'>{result.msg}</p>
    } else if (result === MAIL_STATUS.failure) {
        mail_status = <p className='mt-4 text-red-400'>{result.msg}</p>
    } else if (result === MAIL_STATUS.invalid) {
        mail_status = <p className='mt-4 text-red-400'>{result.msg}</p>
    } else {
        throw new Error(`Unexpected error: unexpected mail status ${result}`);
    }

    useEffect(() => {
        if (result !== MAIL_STATUS.initial) {
            toast(result.msg);
        }
    }, [result?.status])

  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    
    id='contact' className='w-full px-[12%] scroll-mt-35 bg-[url("/
    footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
        <motion.h4
        initial={{y: -20,opacity: 0}}
        whileInView={{y: 0,opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}
        
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

        <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-(--auto-grid-temp-cols) gap-6 mt-10 mb-8'>
                <motion.input
                initial={{y: -50,opacity: 0}}
                whileInView={{y: 0,opacity: 1}}
                transition={{delay: 1.1, duration: 0.6}}

                type="text" placeholder='Enter your name' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90' name="name" />
                <motion.input
                initial={{y: 50,opacity: 0}}
                whileInView={{y: 0,opacity: 1}}
                transition={{delay: 1.2, duration: 0.6}}
                
                type="email" placeholder='Enter your email' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90' name="email"/>
            </div>
            <motion.textarea
            initial={{y: 100,opacity: 0}}
            whileInView={{y: 0,opacity: 1}}
            transition={{delay: 1.3, duration: 0.6}}
            
            rows="6" placeholder='Enter your message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white mb-6 dark:bg-dark-hover/30 dark:border-white/90' name="message"></motion.textarea>

            <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
            text-white rounded-full mx-auto hover:bg-black duration-500
            dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover'
            >Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>

            <ToastContainer />
        </motion.form>    
    </motion.div>
  )
}

export default ContactMe