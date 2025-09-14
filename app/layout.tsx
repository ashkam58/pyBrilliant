import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'PyBrilliant 🐍✨ | Interactive Python Learning Adventure',
  description: 'Embark on a magical Python programming journey! Learn Python through interactive exercises, fun quizzes, and hands-on coding challenges. Perfect for beginners and aspiring developers. 🚀',
  keywords: ['Python programming', 'learn Python', 'interactive coding', 'programming tutorial', 'Python for beginners', 'coding education', 'programming exercises'],
  authors: [{ name: 'PyBrilliant Team' }],
  creator: 'PyBrilliant',
  publisher: 'PyBrilliant',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pybrilliant.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'PyBrilliant 🐍✨ | Interactive Python Learning Adventure',
    description: 'Master Python programming through interactive exercises and fun challenges! Join thousands of learners on their coding journey.',
    url: 'https://pybrilliant.com',
    siteName: 'PyBrilliant',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PyBrilliant - Interactive Python Learning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PyBrilliant 🐍✨ | Interactive Python Learning Adventure',
    description: 'Master Python programming through interactive exercises and fun challenges!',
    images: ['/twitter-image.png'],
    creator: '@pybrilliant',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-comic antialiased overflow-x-hidden">
        <div className="flex flex-col min-h-screen max-w-full">
          <Header />
          <main className="flex-1 relative w-full">
            {/* Floating cartoon elements - hidden on mobile for better performance */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden sm:block">
              <div className="absolute top-10 left-10 text-3xl sm:text-6xl animate-bounce delay-1000">🐍</div>
              <div className="absolute top-32 right-20 text-2xl sm:text-4xl animate-pulse delay-2000">💻</div>
              <div className="absolute bottom-40 left-32 text-3xl sm:text-5xl animate-bounce delay-3000">⚡</div>
              <div className="absolute top-64 left-1/2 text-xl sm:text-3xl animate-spin delay-4000">🚀</div>
              <div className="absolute bottom-32 right-40 text-2xl sm:text-4xl animate-pulse delay-5000">✨</div>
              <div className="absolute top-48 right-1/3 text-xl sm:text-3xl animate-bounce delay-6000">🎯</div>
              <div className="absolute bottom-64 left-1/4 text-2xl sm:text-4xl animate-pulse delay-1000">🧠</div>
            </div>
            
            <div className="relative z-10 w-full max-w-full overflow-x-hidden">
              {children}
            </div>
          </main>
          <Footer />
        </div>
        
        {/* Background particles - reduced on mobile */}
        <div className="fixed inset-0 pointer-events-none z-0 hidden sm:block">
          <div className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-blue-300 rounded-full animate-ping" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
          <div className="absolute w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{top: '40%', right: '15%', animationDelay: '1s'}}></div>
          <div className="absolute w-2 sm:w-3 h-2 sm:h-3 bg-green-300 rounded-full animate-ping" style={{bottom: '30%', left: '20%', animationDelay: '2s'}}></div>
          <div className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-yellow-300 rounded-full animate-ping" style={{top: '60%', right: '25%', animationDelay: '3s'}}></div>
          <div className="absolute w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{bottom: '20%', right: '10%', animationDelay: '4s'}}></div>
        </div>
      </body>
    </html>
  )
}
