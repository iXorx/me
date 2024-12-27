import styles from './page.module.css'
import { Feedback } from '@/components/feedback/Feedback'
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
				<title>Mundo unicornio 🦄 testing + accesibilidad</title>
			</Head>
			<Header section={Section.Notes}>
				Mundo unicornio 🦄 testing + accesibilidad
			</Header>
			<main className={styles.main}>
				<Feedback />
				<div className={styles.wrapper}>
					<SpeakerLink />
					<h2>Recursos mencionados en la charla</h2>
					<ul>
						<li>
							<a href='https://www.dropbox.com/scl/fi/d5j65qwpq2qei9jivgqjl/MundoUnicornio.pdf?rlkey=0r82wqaykeykiuixdb5vn7vhk&st=rexjut6u&dl=0'>
								Presentación en PDF
							</a>
						</li>
						<li>
							<a href='https://www.lflegal.com/2020/05/accessibility-is-delicious/'>
								Citas cocina
							</a>
						</li>
						<li>
							<a href='https://www.researchgate.net/figure/Equality-Equity-and-Justice-Source-Tony-Ruth-from-Maeda-2019_fig2_354087577'>
								Equality, Equity and Justice Source: Tony Ruth from Maeda (2019)
							</a>
						</li>
						<li>
							<a href='https://daresay.co/2023/10/03/inclusive-design/'>
								Tipos de discapacidad
							</a>
						</li>
						<li>
							<a href='https://saucelabs.com/resources/blog/best-practices-for-shifting-accessibility-testing-left'>
								Shift to left
							</a>
						</li>
						<li>
							<a href='https://devops.com/embedding-accessibility-into-the-devops-process/'>
								Accesibilidad en todo el proceso
							</a>
						</li>
						<li>
							<a href='https://ccrweb.ca/en/anti-oppression'>
								Rueda del privilegio
							</a>
						</li>
						<li>
							<a href='https://webaim.org/projects/million/'>Million project</a>
						</li>
						<li>
							<a href='https://github.com/iXorx/talk-unicorn'>
								Repositorio en github
							</a>
						</li>
						<li>
							<a href='https://www.navilens.com/es/'>NaviLens</a>
						</li>
					</ul>
					<Link href='/accessibility'>Mas recursos de accesibilidad</Link>
				</div>
			</main>
		</>
	)
}
