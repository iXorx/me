import { Header, Section } from '@/components/header/Header'
import type { Viewport } from 'next'
import Head from 'next/head'

export const viewport: Viewport = {
	themeColor: '#d04a03',
}

export default function Mentoring() {
	return (
		<>
			<Head>
				<title>Mentoring</title>
				<meta name='theme-color' content='var(--mentoring)' />
			</Head>
			<Header section={Section.Mentoring}>
				<i lang='en'>Mentoring</i>
			</Header>
			<main>
				<p>
					El mentoring es una relación de aprendizaje y crecimiento mutuo. Yo
					soy mentor de varias personas y también tengo mis propios mentores. Es
					una relación que se basa en la confianza, la escucha activa y la
					empatía.
				</p>
				<p>
					En esta sección encontrarás recursos que te ayudarán a ser un mejor
					mentor o a encontrar un mentor que te ayude a crecer.
				</p>
			</main>
		</>
	)
}
