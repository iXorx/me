import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { Player } from '@/components/player/Player'
import { Header, Section } from '@/components/header/Header'
import type { Viewport } from 'next'
import Head from 'next/head'

import styles from './page.module.css'

export const viewport: Viewport = {
	themeColor: '#573697',
}

export default function Turull() {
  return(
<>
  <Head>
    <title>Presentación Jordi Turull</title>
  </Head>
  <Header section={Section.Notes}>Presentación Jordi Turull</Header>
  <main className={styles.main}>
    <div className={styles.player}>
      <Player />
    </div>
  </main>
</>
  )
}
