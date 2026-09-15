import React, { useEffect, useRef, useState } from 'react'
import { CalendarDays, Sparkles, Utensils, Volume2 } from 'lucide-react'

const Services = () => {

  const sectionRef = useRef(null)
  const [isvisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }

    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])
  return (
    <section id='services'
    ref={sectionRef}
      className='scroll-mt-24 bg-white py-20 dark:bg-gray-950'>

      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 transition-all duration-700 ${
        isvisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}>

        <p className='mb-4 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary'>
          Our Services
        </p>

        <h2 className='max-w-2xl font-display text-3xl font-medium leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl'>
          Everything you need for a memorable occasion.
        </h2>

        <div className='mt-6 h-px w-16 bg-primary'></div>

        <p className='mt-6 max-w-2xl font-sans text-sm leading-7 text-[#6F6A61] dark:text-white/80 sm:text-base'>
          From the setting to the details that bring an occasion together,
          Zavora is designed to help create a beautiful and seamless event experience.
        </p>

        <div className='mt-12 grid gap-6 lg:gap-8 sm:grid-cols-2'>

          {/* Event Planning card */}
        <div className={`group h-full rounded-2xl border border-black/10 bg-white p-7 transition-all duration-700 motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-gray-900 ${
          isvisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>

            <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20'>
              <CalendarDays className='h-5 w-5 text-primary' />
            </div>

            <h3 className='font-display text-xl font-medium text-gray-900 dark:text-white' >
              Event Planning
            </h3>

            <p className='mt-3 font-sans text-sm leading-6 text-[#6F6A61] dark:text-white/70'>
              Support to help bring your event together, from planning through execution.
            </p>
            <div className='mt-3 w-10 h-px bg-primary/60'></div>
          </div>

          {/* Catering Services card */}
          <div className={`group h-full rounded-2xl border border-black/10 bg-white p-7 transition-all duration-700 delay-100 motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-gray-900 ${
            isvisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
            <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20'>
              <Utensils className='w-5 h-5 text-primary' />
            </div>
            <h3 className='font-display text-xl font-medium text-gray-900 dark:text-white'>
              Catering Services
            </h3>
            <p className='mt-3 font-sans text-sm leading-6 text-[#6F6A61] dark:text-white/70'>
              Food and beverage options tailored to complement your occasion.
            </p>

            <div className='mt-3 w-10 h-px bg-primary/60'></div>
          </div>

          {/* Event Decor card */}
          <div className={`group h-full rounded-2xl border border-black/10 bg-white p-7 transition-all duration-700 delay-200 motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-gray-900 ${
             isvisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className='mb-5 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 transition-all duration-300 group-hover:bg-primary/20'>
              <Sparkles className='w-5 h-5 text-primary' />

            </div>

            <h3 className='font-display text-xl font-medium text-gray-900 dark:text-white'>
              Event Decor
            </h3>

            <p className='mt-3 font-sans text-sm leading-6   text-[#6F6A61] dark:text-white/70'>
              Thoughtful decorative details designed around the atmosphere you want.
            </p>

            <div className='mt-3 w-10 h-px bg-primary/60'></div>
          </div>

          {/* A/V Equipment card */}
          <div className={`group h-full rounded-2xl border border-black/10 p-7 bg-white transition-all duration-700 delay-300 motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-900 ${
            isvisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>

            <div className='mb-5 rounded-full flex w-12 h-12 items-center justify-center bg-primary/10 transition-all duration-300 group-hover:bg-primary/20'>
              <Volume2 className='w-5 h-5 text-primary' />
            </div>

            <h3 className=' font-display text-xl font-medium text-gray-900 dark:text-white'>
              A/V Equipment
            </h3>

            <p className='mt-3 font-sans text-sm leading-6 text-[#6F6A61] dark:text-white/70'>
              Audio and visual equipment to support presentations, entertainment and special moments.
            </p>

            <div className='mt-3 w-10 h-px bg-primary/60'></div>
          </div>

        </div>
      </div>


    </section>
  )
}

export default Services