import { Mail, Phone } from 'lucide-react'
import React from 'react'
import assets from '../assets/assets'

const Contact = () => {
    return (
        <section id='contact'
            className='scroll-mt-24 bg-white py-20 dark:bg-gray-950'>

            {/* Contact section heading */}
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-12'>

                <p className='mb-4 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary'>
                    Contact Zavora
                </p>

                <h2 className='max-w-2xl font-display text-3xl font-medium leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl'>
                    Let's create something memorable together.
                </h2>

                {/* Gold divider */}
                <div className='mt-6 w-16 h-px bg-primary'></div>

                {/* Short introduction */}
                <p className='mt-6 max-w-7xl font-sans text-sm leading-7 text-[#6F6A61] dark:text-white/70 sm:text-base'>
                    Have a question, want to check availability, or planning an upcoming event? We'd love to hear from you.
                </p>

                {/* Contact information and booking image */}
                <div className='mt-12 grid gap-10 lg:grid-cols-2 lg:items-stretch'>

                    {/* Contact information card */}
                    <div className='rounded-2xl bg-[#F8F5EF] p-6 dark:bg-gray-900 sm:p-8'>

                        <h3 className='font-display text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl'>
                            Let's talk about your event.
                        </h3>

                        <p className='mt-4 max-w-md font-sans text-sm leading-7 text-[#6F6A61] dark:text-white/70 sm:text-base'>
                            Reach out to us to discuss your event, ask questions, or make an enquiry about booking Zavora.
                        </p>

                        {/* Phone contact */}
                        <div className='mt-8 flex items-start gap-4'>

                            {/* Phone icon */}
                            <div className='flex h-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary'>
                                <Phone size={18} />
                            </div>

                            {/* Phone details */}
                            <div>

                                <p className='font-sans text-sm font-semibold text-gray-900 dark:text-white'>
                                    Call us
                                </p>

                                {/* Phone numbers */}
                                <div className='mt-1 flex  flex-col gap-1'>

                                    <a
                                        href='tel:+2348123964378'
                                        className=' font-sans text-sm text-[#6F6A61] underline decoration-black/20 underline-offset-4 transition-colors hover:text-primary dark:text-white/70 dark:hover:text-primary dark:decoration-white/20'>
                                        +2348123964378
                                    </a>
                                    <a
                                        href='tel:+2348169377458 '
                                        className=' font-sans text-sm text-[#6F6A61] underline decoration-black/20 underline-offset-4 transition-colors hover:text-primary dark:text-white/70 dark:hover:text-primary dark:decoration-white/20'>
                                        +2348169377458
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email contact */}
                        <div className='mt-6 flex items-start gap-4'>

                            {/* Email icon */}
                            <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary'>
                                <Mail size={18} />
                            </div>

                            {/* Email details */}
                            <div>
                                <p className='font-sans text-sm font-semibold text-gray-900 dark:text-white'>
                                    Email us
                                </p>

                                <a
                                    href="mailto:info@zavoraeventslimited.com"
                                    className='mt-1  font-sans text-sm text-[#6F6A61] underline decoration-black/20 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary dark:text-white/70  dark:decoration-white/20 dark:hover:text-primary dark:hover:decoration-primary'>
                                    info@zavoraeventslimited.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Booking image */}
                    <div className='group overflow-hidden rounded-2xl'>

                        <img
                            src={assets.Booking}
                            alt="Zavora Event Centre booking information"
                            className='h-full min-h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105' />

                    </div>
                </div>

                {/* Event inquiry form */}
                <div className='mt-16 rounded-2xl border border-black/5 bg-[#F8F5EF] p-6 dark:border-white/10 dark:bg-gray-900 sm:p-8 lg:p-10'>

                    {/* Form heading */}
                    <div className='max-w-2xl'>

                        <p className='mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary'>
                            Make an Inquiry
                        </p>

                        <h3 className='font-display text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl'>
                            Tell us about your event.
                        </h3>

                        <p className='mt-3  text-sm leading-7 font-sans text-[#6F6A61] dark:text-white/70 sm:text-base'>
                            Share a few details about your event and our team will get back to you.
                        </p>

                        {/* Event inquiry form */}
                        <div className='mt-16 rounded-2xl border border-black/5 bg-[#F8F5EF] p-6 dark:border-white/10 dark:bg-gray-900 sm:p-8 lg:p-10'>
                            {/* Form heading */}
                            <div className='max-w-2xl' >

                            </div>

                            {/* The actual form */}
                            <form
                                id='make-inquiry'
                                action="https://api.web3forms.com/submit"
                                method='POST'
                                className='scroll-mt-24 mt-10'>

                                {/* Web3Forms access key */}
                                <input
                                    type="hidden"
                                    name='access_key'
                                    value='e6b45ea8-5267-4285-8ccf-6d3f4556cb08' />

                                {/* Email subject */}
                                <input
                                    type="hidden"
                                    name='subject'
                                    value='New Zavora Event Inquiry' />

                                {/* Sender name */}
                                <input type="hidden"
                                    name='from_name'
                                    value='Zavora Website Inquiry' />

                                {/* Anti-spam honeypot */}
                                <input
                                    type="checkbox"
                                    name='botcheck'
                                    className='hidden' />


                                {/* Name and email row */}
                                <div className='grid gap-6 sm:grid-cols-2'>
                                    {/* Full name field */}
                                    <div>
                                        <label htmlFor="name"
                                            className='font-sans text-sm font-semibold text-gray-900 dark:text-white' >
                                            Full Name
                                        </label>
                                        <input
                                            id='name'
                                            name='name'
                                            type="text"
                                            required
                                            placeholder='your full name'
                                            className='mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary dark:border-white/10 dark:bg-gray-950 dark:text-white dark:placeholder:text-white/40 ' />
                                    </div>

                                    {/* Email field */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className='font-sans font-semibold text-sm text-gray-900 dark:text-white'>
                                            Email Address
                                        </label>
                                        <input
                                            id='email'
                                            name='email'
                                            type="email"
                                            required
                                            placeholder='your email adddress'
                                            className='mt-2 font-sans w-full rounded-xl text-sm border border-black/10 outline-none bg-white text-gray-900 px-4 py-3 transition-colors placeholder:text-gray-400 focus:border-primary dark:bg-gray-950 dark:placeholder:text-white/40 dark:text-white/40 ' />
                                    </div>
                                </div>

                                {/* Phone number and event type row */}
                                <div className='mt-6 grid gap-6 sm:grid-cols-2'>
                                    {/* Phone number field */}
                                    <div className='mt-6'>
                                        <label htmlFor="Phone"
                                            className='font-sans text-sm font-semibold text-gray-900 dark:text-white '>
                                            Phone Number
                                        </label>


                                        <input
                                            id='phone'
                                            name='phone'
                                            type="tel"
                                            required
                                            placeholder='your phone number'
                                            className='mt-2 w-full rounded-xl font-sans  border border-black/10 text-gray-900 px-4 py-3 text-sm bg-white placeholder:text-gray-400 outline-none transition-colors focus:border-primary dark:border-white/10 dark:bg-gray-950 dark:text-white dark:placeholder:text-white/40' />

                                    </div>

                                    {/* Event type field */}
                                    <div className='mt-6'>
                                        <label htmlFor="event Type"
                                            className='font-sans text-sm font-semibold text-gray-900 dark:text-white'>
                                            Event Type
                                        </label>

                                        <select

                                            id='event Type'
                                            name='event Type'
                                            defaultValue=''
                                            required
                                            className='mt-2  w-full font-sans rounded-2xl border border-black/10 text-sm px-4 py-3 text-gray-900 bg-white outline-none transition-colors focus:border-primary dark:border-white/10 dark:bg-gray-950 dark:text-white'>


                                            <option value="" disabled>
                                                Select event type
                                            </option>

                                            <option value="wedding">
                                                Wedding
                                            </option>

                                            <option value="birthday">
                                                Birthday
                                            </option>


                                            <option value="corporate-event">
                                                Corporate Event
                                            </option>

                                            <option value="conference">
                                                Conference
                                            </option>

                                            <option value="other">
                                                Other
                                            </option>

                                        </select>

                                    </div>
                                </div>

                                {/* Preferred date and number of guests row */}
                                <div className='mt-6 grid gap-6 sm:grid-cols-2'>
                                    {/* Preferred date field */}
                                    <div className='mt-6'>

                                        <label htmlFor="date"
                                            className='font-sans text-sm font-semibold text-gray-900 dark:text-white'>
                                            Preferred Date
                                        </label>

                                        <input
                                            id='date'
                                            name='date'
                                            type="date"
                                            required
                                            className='mt-2 w-full font-sans text-sm px-4 py-3 rounded-xl border border-black/10 outline-none transition-colors focus:border-primary text-gray-900 bg-white dark:border-white/10 dark:bg-gray-950 dark:text-white ' />

                                    </div>

                                    {/* Number of guests field */}

                                    <div className='mt-6'>
                                        <label htmlFor="guests"
                                            className='font-sans text-sm font-semibold text-gray-900 dark:text-white'>
                                            Number of Guest
                                        </label>

                                        <input
                                            id='guests'
                                            name='guests'
                                            type="number"
                                            required
                                            min='10'
                                            placeholder='expected number of quests'
                                            className=' mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900transition-colors outline-none focus:border-primary placeholder:text-gray-400 dark:border-white/10 dark:bg-gray-950 dark:text-white dark:placeholder:text-white/40' />

                                    </div>
                                </div>

                                {/* Event details field */}
                                <div className='mt-7'>
                                    <label htmlFor="message"
                                        className='font-sans font-semibold text-sm text-gray-900  dark:text-white '>
                                        Tell us about your event
                                    </label>

                                    <textarea
                                        name="message"
                                        id="message"
                                        rows='5'
                                        required
                                        placeholder='Tell us about your event, requirements, or any questions you have...'
                                        className='mt-2 w-full resize-none rounded-xl border border-black/10 leading-6 bg-white transition-colors outline-none  focus:border-primary px-4 py-3 text-gray-900 placeholder:text-gray-400 dark:border-white/10 dark:bg-gray-950 dark:text-white dark:placeholder:text-white/40 '>

                                    </textarea>

                                </div>

                                {/* Submit button */}
                                <button
                                    type='submit'
                                    className='mt-8 w-full  rounded-xl bg-primary px-6 py-3 font-sans text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/30 hover:shadow-lg  sm:mx-auto'>
                                    Send Inquiry
                                </button>


                            </form>
                        </div>
                    </div>

                </div>


            </div>


        </section>
    )
}

export default Contact