import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Python Brilliant - Interactive Python Learning',
  description: 'Learn Python interactively with bite-sized lessons, quizzes, and a live Python playground.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
