import { Header } from '@/components/header/Header'
import Head from 'next/head'
import Link from 'next/link'

export default function SiteMap() {
	return (
		<>
			<Head>
				<title>Mapa web</title>
			</Head>
			<Header>Mapa web</Header>
			<main>
				<ul>
					<li>
						<Link href='/'>Inicio</Link>
					</li>
					<li>
						<Link href='/accessibility'>Accesibilidad</Link>
					</li>
					<li>
						<Link href='/speaker'>Speaker</Link>
						<ul>
							<li>
								<Link href='/speaker/2024/slashfridays'>
									SlashFridays - Mundo unicornio 🦄 testing + accesibilidad
								</Link>
							</li>
							<li>
								<Link href='/speaker/2024/devbcn'>
									DevBcn - Mundo unicornio 🦄 testing + accesibilidad
								</Link>
							</li>
							<li>
								<Link href='/speaker/2024/vlctechfest'>
									VLC Tech Fest - Mundo unicornio 🦄 testing + accesibilidad
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link href='/notes/mundo-unicornio'>
							Notas de la charla de Mundo Unicornio
						</Link>
					</li>
					<li>
						<Link href='/mentoring'>Mentoring</Link>
					</li>
					<li>
						<Link href='/legal/privacy-policy'>Política de privacidad</Link>
					</li>
					<li>
						<Link href='/legal/legal-terms'>Aviso legal</Link>
					</li>
					<li>
						<Link href='/site-map'>Mapa web</Link>
					</li>
				</ul>
			</main>
		</>
	)
}
