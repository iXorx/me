import styles from './page.module.css'
import { Header, Section } from '@/components/header/Header'
import { SpeakerLink } from '@/components/links/SpeakerLink'
import type { Viewport } from 'next'
import Head from 'next/head'
import Link from 'next/link'

export const viewport: Viewport = {
	themeColor: '#573697',
}

export default function MundoUnicornio() {
	return (
		<>
			<Head>
				<title>Feedback: Mundo unicornio 🦄 testing + accesibilidad</title>
			</Head>
			<Header section={Section.Notes}>
				Feedback: Mundo unicornio 🦄 testing + accesibilidad
			</Header>
			<main className={styles.main}>
				<SpeakerLink />
				<p>
					<Link className={styles.link} href='/notes/mundo-unicornio'>
						Ver notas de la charla
					</Link>
				</p>
				<iframe
					title='Formulario de feedback de la charla de Mundo unicornio: testing + accesibilidad'
					style={{ width: '100vw', border: 'none', height: 1200 }}
					src='https://docs.google.com/forms/d/e/1FAIpQLScGLdqc4powITCRznrnB-FtJeezlhVyY1Ys8bUJLl--ZV4D2A/viewform?embedded=true'
				>
					Cargando…
				</iframe>
			</main>
		</>
	)
}
