"use client"

/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronDown, ChevronRight, HelpCircle, Lock, Play, Shield, Star, ThumbsUp, Video } from "lucide-react"

export default function TestDetail() {
  const [showDetails, setShowDetails] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("practice")
  const [hoverButton, setHoverButton] = useState("")
  const [scrollY, setScrollY] = useState(0)
  const headerRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerOpacity = Math.max(0, Math.min(1, 1 - scrollY / 150))
  const headerScale = Math.max(0.95, Math.min(1, 1 - scrollY / 1000))

  return (
    <div className="min-h-screen bg-green-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg"
      >
        {/* Header with parallax effect */}
        <motion.div
          ref={headerRef}
          style={{
            opacity: headerOpacity,
            scale: headerScale,
          }}
          className="relative bg-gradient-to-r from-green-700 to-green-500 rounded-xl -mx-6 -mt-6 px-6 py-8 mb-8 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: 'url("/placeholder.svg?height=400&width=400")',
              backgroundSize: "400px",
            }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 text-white mb-4"
            >
              <span className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm gap-1.5 inline-flex items-center px-2 py-1 rounded">
                <Shield className="w-3.5 h-3.5" />
                <span>Official MTO Driver's Handbook</span>
              </span>

              <span className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm gap-1.5 inline-flex items-center px-2 py-1 rounded">
                <Check className="w-3.5 h-3.5" />
                <span>Updated for April 2025</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-2"
            >
              Free Ontario G1 Practice Test
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-white/90 text-lg max-w-2xl"
            >
              Prepare for your G1 knowledge test with our comprehensive practice questions and expert tips
            </motion.p>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm p-3 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Star className="w-6 h-6 text-yellow-300" />
          </motion.div>

          <motion.div
            className="absolute bottom-6 right-12 bg-white/10 backdrop-blur-sm p-3 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <ThumbsUp className="w-6 h-6 text-green-300" />
          </motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          <div className="flex-1">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500 mb-4">
                Pass Your G1 Test on the First Try
              </h2>

              <p className="mb-4 text-gray-700 text-lg">
                Our <span className="font-bold text-green-600">most popular free G1 practice test</span> when you're
                getting a licence in Ontario.
              </p>

              <div className="mb-6 border-l-4 border-l-green-500 p-4 rounded-lg shadow-sm">
                <p className="mb-2">
                  Once you are 16, you may visit a Drive Test location and test for the Ontario G1 licence with a
                  written knowledge test of 40 multiple-choice questions.
                </p>
                <p>
                  The G1 test is divided into two parts: 20 questions on road signs, and 20 questions on rules of the
                  road. You must correctly answer{" "}
                  <span className="font-bold text-green-600">16 questions in each section</span> to pass the test.
                </p>
              </div>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mb-4 bg-green-50 p-4 rounded-lg shadow-sm">
                      <p className="mb-2">
                        In addition to the written exam, you will also need to pass a vision test and pay a $158.25
                        package fee, which will cover your knowledge test, your G1 licence, and one G2 road test.
                      </p>
                      <p>
                        The G1 licence is a learner's permit that allows you to practice driving with an experienced
                        driver. After holding your G1 licence for 12 months (or 8 months if you complete an approved
                        driver's education course), you can take your G2 road test.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-green-600 hover:text-green-800 hover:bg-green-50 px-0 flex items-center gap-1"
              >
                {showDetails ? "Show Less" : "Show More"}
                <motion.div animate={{ rotate: showDetails ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-full mb-6">
                <div className="grid w-full grid-cols-2 mb-6">
                  <button
                    onClick={() => setActiveTab("practice")}
                    className={`px-4 py-2 rounded-t-lg ${activeTab === "practice" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
                  >
                    Practice Test
                  </button>
                  <button
                    onClick={() => setActiveTab("premium")}
                    className={`px-4 py-2 rounded-t-lg ${activeTab === "premium" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
                  >
                    Premium Features
                  </button>
                </div>
                {activeTab === "practice" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Free Practice Test Features</h3>
                    <motion.ul
                      className="space-y-3"
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                      initial="hidden"
                      animate="show"
                    >
                      {[
                        "40 multiple-choice questions matching the actual G1 test format",
                        "Instant feedback on your answers",
                        "Detailed explanations for each question",
                        "Track your progress with performance statistics",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            show: { opacity: 1, x: 0 },
                          }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 mt-1 bg-green-100 rounded-full p-1">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                )}
                {activeTab === "premium" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Premium Package Benefits</h3>
                    <motion.ul
                      className="space-y-3"
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                      initial="hidden"
                      animate="show"
                    >
                      {[
                        "Unlimited practice tests with new questions each time",
                        "Performance tracking and analytics",
                        "Focus mode for areas where you need improvement",
                        "Mobile app access for studying on the go",
                        "Video explanations for complex topics",
                        "Printable study guides and cheat sheets",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            show: { opacity: 1, x: 0 },
                          }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 mt-1 bg-green-100 rounded-full p-1">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoverButton("free")}
                onMouseLeave={() => setHoverButton(null)}
                className="relative"
              >
                <button className="w-full gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-base text-white px-4 py-2 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4" />
                  Start free practice test
                  <motion.div animate={{ x: hoverButton === "free" ? 5 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </button>

                {hoverButton === "free" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                  >
                    FREE
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoverButton("premium")}
                onMouseLeave={() => setHoverButton(null)}
                className="relative"
              >
                <button className="w-full gap-2 border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700 text-base px-4 py-2 rounded-lg flex items-center justify-center">
                  <Lock className="w-4 h-4" />
                  Pass the first time with Premium
                </button>

                {hoverButton === "premium" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full"
                  >
                    95% PASS RATE
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Right column with images and testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="lg:w-96"
          >
            {/* Animated image card */}
            <motion.div whileHover={{ y: -5 }} className="relative mb-6 overflow-hidden rounded-xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="/placeholder.svg?height=400&width=320"
                alt="Pickup truck on road"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white font-bold">Ready for the Road</h3>
                <p className="text-white/80 text-sm">Prepare for your test with confidence</p>
              </div>
            </motion.div>

            {/* License card with animation */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-4 mb-6 shadow-md"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: [-1, 1, -1, 1, 0] }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <img
                    src="/placeholder.svg?height=400&width=320"
                    alt="Ontario driver's license"
                    className="w-24 rounded-lg shadow-md"
                  />
                </motion.div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Ontario G1 License</h3>
                  <p className="text-sm text-gray-600">Your first step toward driving freedom</p>
                  <div className="mt-2 bg-green-600/10 text-green-800 text-xs font-medium px-2 py-1 rounded inline-block">
                    16+ years old required
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trustpilot rating with animation */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl shadow-md mb-6"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Trustpilot</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 text-green-500 fill-current" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex items-baseline">
                <div className="text-2xl font-bold">TrustScore 4.6</div>
                <div className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">Excellent</div>
              </div>
              <div className="text-sm text-gray-600 mt-1">Based on 761 reviews</div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="mt-4 bg-white/60 backdrop-blur-sm p-3 rounded-lg italic text-sm text-gray-600"
              >
                "Passed my G1 test on the first try thanks to this practice test! Highly recommended for new drivers."
                <div className="mt-1 text-xs font-medium text-gray-500">— Sarah T., Toronto</div>
              </motion.div>
            </motion.div>

            {/* Video preview card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative bg-gradient-to-r from-green-900 to-green-700 rounded-xl p-4 mb-6 shadow-md overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20">
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url("/placeholder.svg?height=400&width=400")',
                    backgroundSize: "200px",
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 text-white mb-3">
                  <Video className="w-5 h-5" />
                  <h3 className="font-bold">Video Tutorials</h3>
                </div>
                <p className="text-white/80 text-sm mb-3">
                  Watch our expert instructors explain key concepts with visual examples
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-lg inline-flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Watch sample
                </motion.div>
              </div>
            </motion.div>

            {/* Feature badges */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.8,
                  },
                },
              }}
              initial="hidden"
              animate="show"
              className="mt-6 space-y-3"
            >
              {[
                { text: "Perfect for first-timers or newcomers to Ontario", icon: <ThumbsUp className="w-4 h-4" /> },
                { text: "Triple-checked for accuracy", icon: <Shield className="w-4 h-4" />, hasTooltip: true },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-green-600 bg-green-50 p-2 rounded-lg"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.text}</span>
                  {item.hasTooltip && (
                    <HelpCircle className="w-4 h-4 text-gray-400 hover:text-green-600 cursor-help transition-colors duration-300" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500 text-center"
        >
          <p>© 2025 Ontario G1 Practice Test • Updated April 2025</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

