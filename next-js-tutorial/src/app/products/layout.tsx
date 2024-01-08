import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './layout.module.css'
import React from "react";
import Link from 'next/link';

export const metadata: Metadata = {
    title: '멋진 제품 사이트 | 전체 제품 확인',
    description: '멋진 놈들만 취급합니다.',
}

export default function ProductsLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <>
        <nav className={styles.nav}>
            <Link href="/products/women">여성옷</Link>
            <Link href="/products/men">남성옷</Link>
        </nav>
            <section>{children} </section>
        </>


    )
}
