'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Hero Emojis */}
            <div className="flex justify-center space-x-4 mb-8">
              <div className="text-8xl animate-bounce">🐍</div>
              <div className="text-8xl animate-bounce delay-200">✨</div>
              <div className="text-8xl animate-bounce delay-400">🚀</div>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              PyBrilliant
            </h1>
            
            <div className="text-2xl md:text-4xl font-bold text-gray-700 mb-8 animate-pulse">
              Master Python Programming Through 
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> Interactive Adventures!</span>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              🎯 Learn Python the fun way with interactive exercises, engaging quizzes, and hands-on coding challenges. 
              Perfect for beginners and aspiring developers who want to code like a pro! 
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                href="/python/intro"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-full text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
              >
                <span className="flex items-center space-x-2">
                  <span>🚀</span>
                  <span>Start Learning Now</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              
              <Link 
                href="/python"
                className="group px-8 py-4 bg-white border-4 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 font-bold rounded-full text-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center space-x-2">
                  <span>📚</span>
                  <span>Browse Courses</span>
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-2">🌟</div>
                <div className="text-3xl font-bold text-blue-600">4.9/5</div>
                <div className="text-gray-600 font-medium">Rating</div>
              </div>
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-2">👥</div>
                <div className="text-3xl font-bold text-green-600">10K+</div>
                <div className="text-gray-600 font-medium">Students</div>
              </div>
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-2">📖</div>
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600 font-medium">Lessons</div>
              </div>
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-2">🏆</div>
                <div className="text-3xl font-bold text-orange-600">100%</div>
                <div className="text-gray-600 font-medium">Free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose PyBrilliant? 🤔
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make learning Python fun, interactive, and incredibly effective. Here's what makes us special:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4 group-hover:animate-bounce">🎮</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Interactive Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn by doing! Run real Python code in your browser, complete challenges, 
                and see instant results. No setup required - just pure learning fun!
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4 group-hover:animate-bounce">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Smart Quizzes</h3>
              <p className="text-gray-600 leading-relaxed">
                Test your knowledge with intelligent quizzes that adapt to your learning pace. 
                Get instant feedback and celebrate your progress with confetti! 🎉
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4 group-hover:animate-bounce">🏗️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Build Projects</h3>
              <p className="text-gray-600 leading-relaxed">
                Apply your skills to real-world projects! From simple calculators to cool games, 
                you'll build amazing things while learning.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4 group-hover:animate-bounce">👨‍🏫</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn from industry experts with clear explanations, helpful tips, 
                and best practices that will make you a confident Python developer.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4 group-hover:animate-bounce">📱</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Learn Anywhere</h3>
              <p className="text-gray-600 leading-relaxed">
                Mobile-friendly design means you can learn on any device, anywhere, anytime. 
                Perfect for learning on the go!
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-4 group-hover:animate-bounce">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Track Progress</h3>
              <p className="text-gray-600 leading-relaxed">
                See your improvement with detailed progress tracking, achievements, 
                and personalized learning paths tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Python Journey 🗺️
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our structured learning path designed to take you from zero to Python hero!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Learning Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-center space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  1
                </div>
                <div className="flex-1 p-6 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-2 flex items-center space-x-2">
                    <span>🚀</span>
                    <span>Getting Started</span>
                  </h3>
                  <p className="text-gray-600">
                    Learn Python basics: variables, data types, and your first "Hello, World!" program.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  2
                </div>
                <div className="flex-1 p-6 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-2 flex items-center space-x-2">
                    <span>🔄</span>
                    <span>Control Flow</span>
                  </h3>
                  <p className="text-gray-600">
                    Master loops, conditionals, and functions to make your programs smart and dynamic.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  3
                </div>
                <div className="flex-1 p-6 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-2 flex items-center space-x-2">
                    <span>📊</span>
                    <span>Data Structures</span>
                  </h3>
                  <p className="text-gray-600">
                    Explore lists, dictionaries, and sets to organize and manipulate data effectively.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  4
                </div>
                <div className="flex-1 p-6 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-2 flex items-center space-x-2">
                    <span>🛠️</span>
                    <span>Build Projects</span>
                  </h3>
                  <p className="text-gray-600">
                    Apply everything you've learned by building real projects and showcase your skills!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-6xl animate-float">🌟</div>
          <div className="absolute top-32 right-20 text-4xl animate-float delay-1000">⚡</div>
          <div className="absolute bottom-20 left-1/4 text-5xl animate-float delay-2000">🎯</div>
          <div className="absolute bottom-32 right-10 text-4xl animate-float delay-3000">🚀</div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Start Your Python Adventure? 🎉
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Join thousands of learners who are already coding their way to success. 
            Your Python mastery journey starts with a single click!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/python/intro"
              className="group px-10 py-5 bg-white text-blue-600 font-bold rounded-full text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              <span className="flex items-center space-x-3">
                <span>🚀</span>
                <span>Begin Your Journey</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </span>
            </Link>
            
            <Link 
              href="/about"
              className="group px-10 py-5 border-4 border-white text-white hover:bg-white hover:text-blue-600 font-bold rounded-full text-xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center space-x-3">
                <span>ℹ️</span>
                <span>Learn More</span>
              </span>
            </Link>
          </div>

          <div className="mt-12 text-lg opacity-75">
            🎁 <strong>100% Free</strong> • 📱 <strong>Mobile Friendly</strong> • ⚡ <strong>No Setup Required</strong>
          </div>
        </div>
      </section>
    </div>
  )
}
