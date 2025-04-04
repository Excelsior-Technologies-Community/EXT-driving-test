import React, { useState, useEffect } from 'react';

export default function OntarioG1Test() {
    const [isVisible, setIsVisible] = useState(false);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
            <div className={`w-full max-w-6xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Main content box */}
                {/* <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Based on the official MTO Driver's Handbook</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Updated for April 2025</span>
                        </div>
                    </div>

                    <h1 className="text-5xl font-bold mb-6 text-gray-900">
                        Free Ontario G1 Practice Test 2025
                    </h1>

                    <div className="mb-6">
                        <p className="text-lg text-gray-700 mb-4">
                            <span className="font-semibold">Our most popular free G1 practice test when you're getting a licence in Ontario.</span> Once you are 16, you may visit a Drive Test location and test for the Ontario G1 licence with a written knowledge test of 40 multiple-choice questions. The G1 test is divided into two parts: 20 questions on road signs, and 20 questions on rules of the road. You must correctly answer <span className="font-bold">16 questions in each section</span> to pass the test.
                        </p>

                        <div className={`transition-all duration-500 overflow-hidden ${showMore ? 'max-h-96' : 'max-h-0'}`}>
                            <p className="text-lg text-gray-700 mb-4">
                                In addition to the written exam, you will also need to pass a vision test and pay a $158.25 package fee, which will cover your knowledge test.
                            </p>
                            <p className="text-lg text-gray-700">
                                This practice test closely mimics the official G1 test format and includes questions from the same categories you'll face on test day.
                            </p>
                        </div>

                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="text-blue-500 hover:text-blue-700 font-medium flex items-center transition-colors duration-300"
                        >
                            Show {showMore ? 'Less' : 'More'}
                            <svg className={`ml-1 w-4 h-4 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 w-full mt-8">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center grow basis-[200px]">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7l-4 4m0 0l-4-4m4 4v10" />
                            </svg>
                            Continue
                        </button>
                        <button className="bg-white hover:bg-gray-50 text-blue-500 font-semibold py-3 px-6 rounded-lg border border-blue-500 transition-colors duration-300 flex items-center justify-center grow basis-[200px]">
                            <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Pass the first time with Premium
                        </button>
                    </div>
                </div> */}

                {/* Main content box */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Left side: Text and header */}
                        <div className="md:w-3/5 p-8">
                            {/* Header with checkmarks */}
                            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Based on the official MTO Driver's Handbook</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Updated for April 2025</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                Free Ontario G1 Practice Test 2025
                            </h1>

                            {/* Description */}
                            <div className="mb-6">
                                <p className="text-lg text-gray-700 mb-4">
                                    <span className="font-semibold">Our most popular free G1 practice test when you're getting a licence in Ontario.</span> Once you are 16, you may visit a Drive Test location and test for the Ontario G1 licence with a written knowledge test of 40 multiple-choice questions. The G1 test is divided into two parts: 20 questions on road signs, and 20 questions on rules of the road. You must correctly answer <span className="font-bold">16 questions in each section</span> to pass the test.
                                </p>

                                <div className={`transition-all duration-500 overflow-hidden ${showMore ? 'max-h-96' : 'max-h-0'}`}>
                                    <p className="text-lg text-gray-700 mb-4">
                                        In addition to the written exam, you will also need to pass a vision test and pay a $158.25 package fee, which will cover your knowledge test.
                                    </p>
                                    <p className="text-lg text-gray-700">
                                        This practice test closely mimics the official G1 test format and includes questions from the same categories you'll face on test day.
                                    </p>
                                </div>

                                <button
                                    onClick={() => setShowMore(!showMore)}
                                    className="text-blue-500 hover:text-blue-700 font-medium flex items-center transition-colors duration-300"
                                >
                                    Show {showMore ? 'Less' : 'More'}
                                    <svg className={`ml-1 w-4 h-4 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-4 w-full mt-8">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center grow basis-[200px]">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7l-4 4m0 0l-4-4m4 4v10" />
                                    </svg>
                                    Continue
                                </button>
                                <button className="bg-white hover:bg-gray-50 text-blue-500 font-semibold py-3 px-6 rounded-lg border border-blue-500 transition-colors duration-300 flex items-center justify-center grow basis-[200px]">
                                    <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Pass the first time with Premium
                                </button>
                            </div>
                        </div>

                        {/* Right side: Images and other content */}
                        <div className="md:w-2/5 bg-gray-50 p-8 flex flex-col justify-center items-center">
                            <div className="relative w-full max-w-md">
                                {/* Car image */}
                                <div className="mb-6">
                                    <img
                                        src={image}
                                        alt="Car with slow vehicle sign"
                                        className="w-full rounded-lg shadow-md"
                                    />
                                </div>

                                {/* License image */}
                                <div className="mb-6">
                                    <img
                                        src="/api/placeholder/400/200"
                                        alt="Ontario driver's license"
                                        className="w-full rounded-lg shadow-md"
                                    />
                                </div>

                                {/* Trust badge */}
                                <div className="bg-white rounded-lg p-4 shadow-md">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-lg font-semibold">TrustScore 4.6</span>
                                        <div className="flex">
                                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-1 text-sm text-gray-600">761 reviews</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg
                                                    key={star}
                                                    className={`w-5 h-5 ${star <= 4 ? 'text-green-500' : 'text-gray-300'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Perfect for first-timers or newcomers to Ontario</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Triple-checked for accuracy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">What you need to know</h2>
                        <div className="animate-pulse h-24 bg-gray-100 rounded"></div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">What to expect on the official exam</h2>
                        <div className="animate-pulse h-24 bg-gray-100 rounded"></div>
                    </div>
                </div>

                {/* More Resources Section */}
                <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <h2 className="text-4xl font-bold mb-4">More Resources</h2>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Column 1 */}
                            <div>
                                <h3 className="text-blue-500 font-semibold mb-2">G1 Diagnostic Test</h3>
                                <p className="text-gray-600 mb-4">Easy</p>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">G1 Practice Test 1</a></li>
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">G1 Practice Test 2</a></li>
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">G1 Practice Test 3</a></li>
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">G1 Practice Test 4</a></li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div>
                                <h3 className="text-gray-600 font-semibold mb-2">Hard</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">G1 Practice Test 5</a></li>
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">G1 Road Rules Test</a></li>
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">200-Question G1 Test</a></li>
                                </ul>

                                <h3 className="text-gray-600 font-semibold mt-6 mb-2">Hardest</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">G1 Limits, Fines & Demerit Points Practice Test</a></li>
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">Road Rule Marathon</a></li>
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">Road Sign Marathon</a></li>
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">G1 Massive Marathon</a></li>
                                </ul>
                            </div>

                            {/* Column 3 */}
                            <div>
                                <h3 className="text-gray-600 font-semibold mb-2">Simulator</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">G1 Test Simulator</a></li>
                                </ul>

                                <h3 className="text-gray-600 font-semibold mt-6 mb-2">Behind-the-wheel</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">Virtual 360° Situations</a></li>
                                    <li><a href="#" className="text-blue-500 hover:underline transition-colors">Behind-the-Wheel Simulator</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Province Section */}
                <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                    <h2 className="text-4xl font-bold mb-4">Are you in another province?</h2>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
                            <a href="#" className="text-blue-500 hover:underline transition-colors">Alberta</a>
                            <a href="#" className="text-blue-500 hover:underline transition-colors">Newfoundland and Labrador</a>
                            <a href="#" className="text-blue-500 hover:underline transition-colors">Prince Edward Island</a>

                            <a href="#" className="text-blue-500 hover:underline transition-colors">British Columbia</a>
                            <a href="#" className="text-blue-500 hover:underline transition-colors">Northwest Territories</a>
                            <a href="#" className="text-blue-500 hover:underline transition-colors">Quebec</a>

                            <a href="#" className="text-blue-500 hover:underline transition-colors">Manitoba</a>
                            <a href="#" className="text-blue-500 hover:underline transition-colors">Nova Scotia</a>
                            <a href="#" className="text-blue-500 hover:underline transition-colors">Saskatchewan</a>

                            <a href="#" className="text-blue-500 hover:underline transition-colors">New Brunswick</a>
                            <a href="#" className="text-blue-500 hover:underline transition-colors">Nunavut</a>
                            <a href="#" className="text-blue-500 hover:underline transition-colors">Yukon</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Add this CSS to your global styles
const style = document.createElement('style');
style.textContent = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
`;
document.head.appendChild(style);