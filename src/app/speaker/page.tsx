import styles from './page.module.css'
import { Card } from '@/components/card/Card'
import { Header, Section } from '@/components/header/Header'
import type { Viewport } from 'next'
import Head from 'next/head'
import Image from 'next/image'

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
					<h2>¿Dónde he hablado?</h2>
					<ul className={styles.list}>
						<Card
							heading={
								<Image
									src='slash-logo.jpg'
									alt='Logo SlashMobility'
									width={220}
									height={45}
								/>
							}
							title='Mundo unicornio 🦄 testing + accesibilidad'
							conf='SlahFridays'
							date='15/11/2024'
							link='speaker/2024/slashfridays'
						/>
						<Card
							heading={
								<Image
									src='devbcn-logo.png'
									alt='Logo DevBcn'
									width={150}
									height={80}
								/>
							}
							title='Mundo unicornio 🦄 testing + accesibilidad'
							conf='DevBcn'
							date='13/06/2024'
							link='speaker/2024/devbcn'
						/>
						<Card
							heading={
								<Image
									src='vlc-logo.png'
									alt='Logo VLC Tech Fest 2024'
									width={180}
									height={60}
								/>
							}
							title='Mundo unicornio 🦄 testing + accesibilidad'
							conf='VLC Tech Fest'
							date='08/06/2024'
							link='speaker/2024/slashfridays'
						/>
						<Card
							heading={<>Fabrics</>}
							title='Mundo unicornio 🦄 testing + accesibilidad'
							conf='Fabrics'
							date='06/06/2024'
							link='speaker/2024/slashfridays'
						/>
						<Card
							heading={
								<Image
									src='garaje-logo.png'
									alt='Logo Garaje de Ideas'
									width={60}
									height={60}
								/>
							}
							title='Mejorando la accesibilidad de tu aplicación con react-testing-library 🐙'
							conf='Garaje de Ideas'
							date='12/07/2023'
							link='speaker/2024/slashfridays'
						/>
						<Card
							heading={
								<Image
									src='devbcn-logo.png'
									alt='Logo DevBcn'
									width={150}
									height={80}
								/>
							}
							title='Extendiendo los microservicios al frontend: Microfrontends.'
							conf='DevBcn'
							date='03/07/2023'
							link='speaker/2024/slashfridays'
						/>
						<Card
							heading={
								<Image
									src='activismo-logo.jpg'
									alt='Logo Activismo Positivo'
									width={180}
									height={78}
								/>
							}
							title='Charla con Jordi Turull'
							conf='Activismo Positivo'
							date='19/05/2021'
							link='speaker/2024/slashfridays'
						/>
					</ul>
				</section>
			</main>
		</>
	)
}
