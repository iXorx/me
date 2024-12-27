import { Header, Section } from '@/components/header/Header'
import type { Viewport } from 'next'
import Head from 'next/head'

export const viewport: Viewport = {
	themeColor: '#32586d',
}

export default function Accessibility() {
	return (
		<>
			<Head>
				<title>Accesibilidad</title>
			</Head>
			<Header section={Section.Accessibility}>Accesibilidad</Header>
			<main>
				<p>
					La accesibilidad (a11y) no es un privilegio, es un derecho. Por eso,
					desde hace 4 años, soy Accessibility Champion y me dedico a
					concienciar y a formar equipos de desarrollo en accesibilidad.
				</p>
				<p>Te comparto el listado de recursos que más uso:</p>
				<section>
					<h2>Herramientas</h2>
					<h3>Extensiones navegador</h3>
					<p>
						Los siguientes enlaces son para las extensiones de Google Chrome.
						Para usarlas en Firefox simplemente busca por el mismo nombre.
					</p>
					<ul lang='en' aria-label='Chrome extensions'>
						<li>
							<a href='https://chromewebstore.google.com/detail/aria-devtools/dneemiigcbbgbdjlcdjjnianlikimpck?hl=es'>
								<strong>ARIA DevTools</strong>
							</a>
						</li>
						<li>
							<a href='https://chromewebstore.google.com/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp?hl=es'>
								Equal Access Accessibility Checker by IBM
							</a>
						</li>
						<li>
							<a href='https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=es'>
								HeadingsMap
							</a>
						</li>
						<li>
							<a href='https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=es'>
								Axe DevTools by deque
							</a>
						</li>
						<li>
							<a href='https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=es'>
								Wave Evaluation Tool
							</a>
						</li>
						<li>
							<a href='https://chromewebstore.google.com/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce?hl=es'>
								ARC Toolkit by TPGi
							</a>
						</li>
						<li>
							<a href='https://chromewebstore.google.com/detail/taba11y/aocppmckdocdjkphmofnklcjhdidgmga?hl=es'>
								Taba11y
							</a>
						</li>
					</ul>
					<h3 lang='en'>Bookmarklets</h3>
					<p>
						Un bookmarklet es un marcador que, en lugar de apuntar a una
						dirección URL, hace referencia a una pequeña porción de código
						JavaScript para ejecutar ciertas tareas automáticamente.
					</p>
					<p>
						Arrastra los siguientes enlaces a tu barra de marcadores para
						tenerlos siempre a mano, o copia el enlace y añádelo manualmente
						como marcador:
					</p>
					<ul lang='en' aria-label='bookmarklets'>
						<li>
							<a href='https://sa11y.netlify.app/'>sa11y</a>
						</li>
						<li>
							<a href='https://codepen.io/aardrian/full/eYZWNyv'>
								44x44 cursor
							</a>
						</li>
						<li>
							<a href='https://dequeuniversity.com/validator'>Deque</a>
						</li>
					</ul>
				</section>
				<section>
					<h2>Personas de referencia</h2>
					<p>
						Personas que hacen creación de contenido en redes sobre
						accesibilidad y (bajo mi criterio) deberías seguir:
					</p>
					<h3 id='content-es'>Contenido en castellano:</h3>
					<ul aria-describedby='content-es'>
						<li>
							<a href='https://x.com/alenanik11'>[X] Alena Nikolaeva</a>
						</li>
						<li>
							<a href='https://x.com/bolonio'>[X] Adrián Bolonio</a>
						</li>
						<li>
							<a href='https://www.linkedin.com/in/olgacarreras/'>
								[LinkedIn] Olga Carreras Montoto
							</a>
						</li>
					</ul>
					<h3 id='content-en'>Contenido en inglés:</h3>
					<ul aria-describedby='content-en'>
						<li>
							<a href='https://www.linkedin.com/in/meryl/'>
								[LinkedIn] Meryl Evans
							</a>
						</li>
						<li>
							<a href='https://www.linkedin.com/in/cambeaudoin/'>
								[LinkedIn] Cam Beaudoin
							</a>
						</li>
						<li>
							<a href='https://www.linkedin.com/in/annaecook/'>
								[LinkedIn] Anna Cook
							</a>
						</li>
						<li>
							<a href='https://www.linkedin.com/in/vitalyfriedman/'>
								[LinkedIn] Vitaly Friedman
							</a>
						</li>
						<li>
							<a href='https://www.linkedin.com/in/jeremyandrewdavis/'>
								[LinkedIn] Jeremy Andrew Davis
							</a>
						</li>
					</ul>
				</section>
			</main>
		</>
	)
}
