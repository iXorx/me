import { Header, Section } from '@/components/header/Header'
import type { Viewport } from 'next'
import Head from 'next/head'

export const viewport: Viewport = {
	themeColor: '#f6f1d1',
}

export default function Comunidad() {
	return (
		<>
			<Head>
				<title>Comunidad</title>
			</Head>
			<Header section={Section.Comunidad}>Comunidad</Header>
			<main>
				<p>
					La comunidad es un grupo de personas que comparten un interés común.
					En el caso de la comunidad de desarrollo web, el interés común es la
					creación de sitios web y aplicaciones web.
				</p>
				<p>
					La comunidad de desarrollo web es muy activa y hay muchas maneras de
					participar.
				</p>
				<p>
					Algunas maneras de participar en la comunidad de desarrollo web
					incluyen:
				</p>
				<ul>
					<li>Asistir a eventos de desarrollo web</li>
					<li>Participar en foros de desarrollo web</li>
					<li>Contribuir a proyectos de código abierto</li>
					<li>
						Compartir conocimientos y experiencias con otros desarrolladores
					</li>
				</ul>
			</main>
		</>
	)
}
