import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/products">
            <a>produtos</a>
          </Link>
        </li>
        <li>
         <Link href="/about">
            <a>about</a>
          </Link>
        </li>
      </ul>
      <h1>hello World NEXt.js </h1>
    </div>   
  )
}
