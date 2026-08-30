import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Section } from "@/components/header/Header";
import { SpeakerLink } from "@/components/links/SpeakerLink";
import styles from "../../page.module.css";

export const metadata: Metadata = {
	title: "Mundo unicornio 🦄 testing + accesibilidad",
};

export const viewport: Viewport = {
	themeColor: "#933f99",
};

export default function DevBcn() {
	return (
		<>
			<Header section={Section.Speaker}>
				Mundo unicornio 🦄 testing + accesibilidad
			</Header>
			<main>
				<SpeakerLink />
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
					<a href="https://www.youtube.com/watch?v=SuGQihTcIHg">
						<span className={styles.image}>
							<Image
								src="/speaker/vlc.png"
								alt="Captura de pantalla del video de la charla"
								fill
							/>
						</span>
						<span>
							Enlace al video de <i lang="en">Youtube</i>
						</span>
					</a>
				</p>
				<p>
					Ver las <Link href="/notes/mundo-unicornio">notas de la charla</Link>{" "}
					y <Link href="/feedback/mundo-unicornio">dar feedback</Link>
				</p>

				<h2>
					Más sobre <i lang="en">VLC Tech Fest</i>
				</h2>
				<p>
					VLCTechFest es un día de charlas por y para las comunidades tecnológicas de la Comunidad Valenciana. Un evento para aprender, inspirarse y hacer networking en un ambiente abierto y colaborativo.
				</p>
				<p>
					Siguiendo el formato de conferencias con múltiples tracks simultáneos, ofrecemos charlas para todos los gustos, con espacio para preguntas y momentos dedicados a la interacción entre asistentes.
				</p>
				<p>
					Es un festival donde la participación es clave. Por eso, es un evento gratuito y de acceso libre hasta completar aforo. Desde su primera edición en 2018, donde más de 120 asistentes nos acompañaron, VLCTechFest ha crecido y evolucionado con cada edición.

				</p>
				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	);
}
