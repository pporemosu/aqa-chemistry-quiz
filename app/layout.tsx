import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'A-level Chemistry Dashboard',
  description: 'MCQ revision for AQA AS and A-level Chemistry (7404/7405)',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  )
}
