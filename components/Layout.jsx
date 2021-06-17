import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '@/styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'

// # Received prpos
const Layout = ({ title, keywords, description, children }) => {

    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>

            {/* //todo: main content */}
            <Header />
            {
                router.pathname === '/' && <Showcase />
            }
            <div className={styles.container}>
                {children}
            </div>
            <Footer />

        </div>
    )
}

export default Layout


// # Set default props
Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: 'music, dj, edm, events'
}
