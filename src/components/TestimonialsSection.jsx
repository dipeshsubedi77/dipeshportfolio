"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote:
        "Working with this designer was an absolute pleasure. They took our vague ideas and transformed them into a stunning brand identity that perfectly captures our company's essence. The attention to detail and creativity exceeded our expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "StartupX",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      quote:
        "I was blown away by the quality of work delivered. Not only were the designs visually impressive, but they also showed a deep understanding of our business goals and target audience. The project was completed on time and the communication was excellent throughout.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "Design Studio",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "As a fellow designer, I have high standards when it comes to collaborating with other creatives. This designer not only met but exceeded those standards. Their typography skills are exceptional, and they have a unique ability to balance creativity with functionality.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20">
      <div className="container-custom mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Carousel */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 min-h-[320px] flex items-center">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
                className="w-full"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                        <img
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -left-2 bg-purple-600 dark:bg-purple-500 text-white p-2 rounded-full">
                        <Quote size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl italic mb-6">"{testimonials[currentIndex].quote}"</p>
                    <div>
                      <h3 className="text-lg font-bold">{testimonials[currentIndex].name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? "bg-purple-600 dark:bg-purple-500 w-6" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

