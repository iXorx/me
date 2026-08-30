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
					Esta charla no fue registrada en vídeo, pero puedes ver la misma
					versión de <Link href="/speaker/2024/slashfridays">la charla</Link>{" "}
					grabada en otro evento.
				</p>
				<p>
					Ver las <Link href="/notes/mundo-unicornio">notas de la charla</Link>{" "}
					y <Link href="/feedback/mundo-unicornio">dar feedback</Link>
				</p>
				<p className={styles.image}>
					<Image
						src="/speaker/fabrics24.jpg"
						alt="Captura de pantalla del video de la charla"
						fill
						style={{ objectFit: "contain" }}
					/>
				</p>
				<h2>
					Más sobre Fabrics
				</h2>
				<p>
					La primera edición de Fabrics, nuestro evento anual de Tecnología, Datos, Privacidad y Seguridad, reunió a la comunidad tecnológica para explorar cómo la innovación está dando forma al futuro de la moda. El evento contó con más de 200 asistentes de diferentes equipos, reflejando un impulso compartido por aprender, crecer y superar límites.
				</p>
				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	);
}
