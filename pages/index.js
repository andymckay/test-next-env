import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


function Home({ title, envs }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <h1>{title}</h1>
        {envs.map((env, index) => (
          <li key={index}>{env.key}: {env.value}</li>
        ))}
      </div>
    </div>
  )
  }


export async function getStaticProps() {
  let envs = [];
  let keys = Object.keys(process.env).sort();
  for (let k of keys) { envs.push({key: k, value: process.env[k]}) }
  return {
    props: {
      title: 'Environment Variables',
      envs: envs
    }
  }
}

export default Home
