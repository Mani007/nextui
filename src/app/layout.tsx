import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OPScraft',
  description: 'Welcome to Opscraft.cloud. State of the art MLops service provider including LLMops, Visualops etc. for all types of machine learning and deep learning applications. We are committed to save your time and cost for AI/ML product development also our solution is future proof, hence you will always be leaps ahead of your competition for decades, no matter how much technology changes. ',
  
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
