import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cofi-Home-Bot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cofi home!
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>in develop</code>
        </p>
      </main>

      <footer className={styles.footer}>
          Powered by {' '}
          <a href={'https://github.com/victorst79'}>@victorst79</a>
      </footer>
    </div>
  )
}
