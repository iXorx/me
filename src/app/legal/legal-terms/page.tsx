import { Header } from '@/components/header/Header'
import Head from 'next/head'

export default function LegalTerms() {
	return (
		<>
			<Head>
				<title>Aviso legal</title>
				<meta name='theme-color' content='var(--accent)' />
			</Head>
			<Header>Aviso legal</Header>
			<main>
				<p>Este es el aviso legal de la página.</p>
				<p>
					Este documento es un aviso legal genérico y no debe ser considerado
					como un consejo legal real. Está destinado únicamente para fines
					didácticos.
				</p>
				<h2>Responsabilidad</h2>
				<p>
					El contenido de este sitio web es solo para fines informativos y no
					debe ser considerado como asesoramiento legal. No nos hacemos
					responsables de la exactitud, integridad, actualidad o idoneidad de
					cualquier información en este sitio.
				</p>
				<h2>Propiedad intelectual</h2>
				<p>
					Todos los derechos de propiedad intelectual del contenido de este
					sitio web son propiedad de sus respectivos autores.
				</p>
				<h2>Enlaces a otros sitios web</h2>
				<p>
					Este sitio web puede contener enlaces a otros sitios web que no están
					bajo nuestro control. No somos responsables del contenido de estos
					sitios web.
				</p>
				<h2>Modificaciones</h2>
				<p>
					Nos reservamos el derecho de modificar este aviso legal en cualquier
					momento. Por favor, revíselo con regularidad para estar al tanto de
					cualquier cambio.
				</p>
			</main>
		</>
	)
}
