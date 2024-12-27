import { Card } from '@/components/card/Card'
import { Header, Section } from '@/components/header/Header'
import type { Viewport } from 'next'
import Head from 'next/head'

export const viewport: Viewport = {
	themeColor: '#933f99',
}

export default function Speaker() {
	return (
		<>
			<Head>
				<title lang='en'>Speaker</title>
			</Head>
			<Header section={Section.Speaker}>
				<i lang='en'>Speaker</i>
			</Header>
			<main>
				<p>
					Me encanta compartir conocimientos y experiencias. Por eso, he
					participado en varios eventos y conferencias como ponente.
				</p>
				<p>
					¿Crees que mi perfil encaja en tu evento? ¡Pues{' '}
					<a href='mailto:hi@jorditurull.me'>mándame un correo</a>!
				</p>
				<section>
					<h2>Conferencias en las que he participado:</h2>
					<div>
						<Card
							title='Mundo unicornio 🦄 testing + accesibilidad'
							image='slash-logo.jpg'
							conf='SlahFridays'
							date='2021-09-24'
							summary='SlashFridays es un evento de la comunidad de Mango que se celebra el último viernes de cada mes. En esta edición, hablé sobre cómo mejorar la accesibilidad en nuestras aplicaciones web.'
							link='speaker/2024/slashfridays'
						/>
					</div>
				</section>
			</main>
		</>
	)
}
