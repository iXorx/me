import type { Viewport } from "next";
import Head from "next/head";
import Link from "next/link";
import { Header, Section } from "@/components/header/Header";
import { SpeakerLink } from "@/components/links/SpeakerLink";

export const viewport: Viewport = {
	themeColor: "#933f99",
};

export default function DevBcn() {
	return (
		<>
			<Head>
				<title lang="en">DevBcn</title>
			</Head>
			<Header section={Section.Speaker}>
				<i lang="en">DevBcn</i>
			</Header>
			<main>
				<SpeakerLink />
				<h2>Mundo unicornio 🦄 testing + accesibilidad</h2>
				<p>
					Cada año WebAim estudia el estado global de la accesibilidad
					analizando el top 1 millón de homepages (
					<a href="https://webaim.org/projects/million/" lang="en">
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
					nuestras aplicaciones, protegiéndonos con el uso de unit test con{" "}
					<i lang="en">react-testing-library</i>. Como base, usaremos una
					aplicación hecha en <i lang="en">React</i> para ver también las
					herramientas que nos ofrece el navegador para detectar estos fallos.
				</p>
				<p>
					Esta charla no fue registrada en vídeo, pero puedes ver la misma
					versión de <Link href="/speaker/2024/slashfridays">la charla</Link>{" "}
					grabada en otro evento.
				</p>
				<p>
					Ver las <Link href="/notes/mundo-unicornio">notas de la charla</Link>{" "}
					y <Link href="/feedback/mundo-unicornio">dar feedback</Link>
				</p>

				<h2>
					Más sobre <i lang="en">DevBcn</i>
				</h2>
				<p>
					Conferencia multidisciplinar (antigua JBCNConf) creada para
					desarrolladores y por desarrolladores, para aprender y compartir sobre
					las diferentes tecnologías de software modernas que se utilizan en las
					empresas.
				</p>
				<p>
					Antigua JBCNConf, ahora con 7 temas sobre Java, JVM, lenguajes
					nativos, nube, DevOps, Kubernetes, frontend, Agile, Big Data, Machine
					Learning e IA
				</p>
				<p>Hospitalet de llobregat, Barcelona, España</p>
				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	);
}
