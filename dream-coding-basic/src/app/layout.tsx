import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './layout.module.css'
import React from "react";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 놈들만 취급합니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className={styles.header}>
        <h1>Demo note</h1>
        <Link href="/contact">contact</Link>
        <Link href="/about">about</Link>
          <Link href="/products">Products</Link>
      </header>
      {children}
      </body>
    </html>
  )
}
