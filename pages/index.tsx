import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header.server'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className='container mx-lg'>
            <Header></Header>
            <div className={styles.container}>
                <Head>
                    <title>kamalaknn.dev</title>
                    <meta name="description" content="More updates coming soon..." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Work In Progress
                    </h1>
                    <p className={styles.description}>
                        I&lsquo;m still working on this. Please come back after some time.
                    </p>
                </main>

                <footer className={styles.footer}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <span className={styles.logo}>
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </span>
                    </a>
                </footer>
            </div>
        </div>
    )
}
