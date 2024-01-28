import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OPScraft',
  description: 'OPScraft is the LAST THING you will ever need for your Machine Learning and Artificial Intelligence technology. A State-of-the-art MLops solutions and service provider including scalable, maintainable, testable LLMops, VisualOPS etc. For all types of machine learning and deep learning applications. We are committed to save your time and cost for AI/ML product development also our solution is future proof, hence you will always be leaps ahead of your competition in coming decades, no matter how much technology advances. ',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
