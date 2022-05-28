import Head from 'next/head'
import Link from 'next/link'
import styles from './MainLayout.module.css'
import { Navbar }  from '../Navbar.jsx'

export const MainLayout = ({pagina, href, retorno}) => {
  return (
    <div>
        <div className={styles.container}>
        <Head>
            <title>Sitio - Franco</title>
            <meta name="description" content="{pagina} Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <main className={styles.main}>
            <h1 className={styles.title}>
            Ir a <Link href={href}>{retorno}</Link>
            </h1>

            <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/{pagina.toLowerCase()}.js</code>
            </p>

        </main>
        </div>
    </div>
  )
}
