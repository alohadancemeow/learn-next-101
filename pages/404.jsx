import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from '@/styles/404.module.css'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
    return (
        <Layout title="Page Not Found">
            <div className={styles.error}>
                <h1><FaExclamationTriangle />404</h1>
                <h4>Sorry, there is nothing here</h4>
                <Link href="/">GO Back Home</Link>
            </div>
        </Layout>
    )
}

export default NotFoundPage
