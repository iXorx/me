import styles from './page.module.css'
import { Header, Section } from '@/components/header/Header'
import { Player } from '@/components/player/Player'
import '@vidstack/react/player/styles/default/layouts/video.css'
import '@vidstack/react/player/styles/default/theme.css'
import type { Viewport } from 'next'
import Head from 'next/head'

export const viewport: Viewport = {
	themeColor: '#573697',
}

export default function Turull() {
	return (
		<>
			<Head>
				<title>Presentación Jordi Turull</title>
			</Head>
			<Header section={Section.Notes}>Presentación Jordi Turull</Header>
			<main className={styles.main}>
				<div className={styles.player}>
					<Player />
					<p id='downloads'>Ficheros para su descarga directa:</p>
					<ul aria-describedby='downloads'>
						<li>
							<a href='/me/video/cv.mp4'>Video sin audiodescripción</a>
						</li>
						<li>
							<a href='/me/video/audiodesc.mp4'>Video con audiodescripción</a>
						</li>
						<li>
							<a href='/me/video/cv.vtt'>Subtítulos en español</a>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}
