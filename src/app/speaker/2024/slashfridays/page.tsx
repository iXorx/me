import styles from './page.module.css'
import { Header, Section } from '@/components/header/Header'
import { SpeakerLink } from '@/components/links/SpeakerLink'
import type { Viewport } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const viewport: Viewport = {
	themeColor: '#933f99',
}

export default function SlashFridays() {
	return (
		<>
			<Head>
				<title lang='en'>SlashFridays</title>
			</Head>
			<Header section={Section.Speaker}>
				<i lang='en'>SlashFridays</i>
			</Header>
			<main>
				<SpeakerLink />
				<h2>Mundo unicornio 🦄 testing + accesibilidad</h2>
				<p>
					Cada año WebAim estudia el estado global de la accesibilidad
					analizando el top 1 millón de homepages (
					<a href='https://webaim.org/projects/million/' lang='en'>
						1 Milion Project
					</a>
					). En el análisis de febrero de 2024 se detectaron cerca de 50
					millones de errores diferentes con una media de 50 errores por página
					web. Lo más curioso es que el 96% de los errores se pueden agrupar en
					6 categorías y éstas han sido las mismas durante los 6 años del
					estudio.
				</p>
				<p>
					En este charla vamos a unir dos grandes unicornios de nuestra
					industria: los tests y la accesibilidad y veremos cuáles son y que
					podemos hacer para evitar repetir siempre los mismos errores en
					nuestras aplicaciones, protegiéndonos con el uso de unit test con{' '}
					<i lang='en'>react-testing-library</i>. Como base, usaremos una
					aplicación hecha en <i lang='en'>React</i> para ver también las
					herramientas que nos ofrece el navegador para detectar estos fallos.
				</p>
				<p>
					<a href='https://www.youtube.com/watch?v=hHtQxkmNtZw'>
						<span className={styles.image}>
							<Image
								src='slash-speaker.png'
								alt='Captura de pantalla del video de la charla'
								fill
							/>
						</span>
						Enlace al video de <i lang='en'>Youtube</i>
					</a>
				</p>
				<p>
					Ver las <Link href='/notes/mundo-unicornio'>notas de la charla</Link>{' '}
					y <Link href='/feedback/mundo-unicornio'>dar feedback</Link>
				</p>

				<h2>
					Más sobre <i lang='en'>SlashFridays</i>
				</h2>
				<a href='https://slashmobility.com/blog/2024/11/accesibilidad-digital-como-construir-un-mundo-mas-inclusivo/'>
					Post del blog mencionado la charla.
				</a>
				<p>
					En el ADN Slash están inscritas las ganas de aprender y compartir
					conocimiento. Por ello, los viernes alternos{' '}
					<i lang='en'>Slashmobility</i> organiza las famosas SlashFridays, una
					iniciativa para estar al día de las novedades del sector, para
					aprender de los demás, generar conocimiento y motivar a su equipo. La
					temática que tratan es amplia: innovación, tendencias del mercado,
					tecnologías disruptivas, aprendemos de expertos colaboradores externos
					que nos hablan de su modelo de negocio, también hablan sobre diseño o
					desarrollo, entre otros. Al fin y al cabo, un espacio donde compartir
					conocimiento y generar networking.
				</p>
				<a href='https://slashmobility.com/blog/2019/01/slashfriday-tu-espacio-de-conocimiento-y-networking/'>
					Más información de <i lang='en'>SlashFridays</i>
				</a>
				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	)
}
