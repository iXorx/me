import type { Viewport } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Header, Section } from "@/components/header/Header";
import { SpeakerLink } from "@/components/links/SpeakerLink";
import styles from "./page.module.css";

export const viewport: Viewport = {
	themeColor: "#933f99",
};

export default function SlashFridays() {
	return (
		<>
			<Head>
				<title lang="en">SlashFridays</title>
			</Head>
			<Header section={Section.Speaker}>
				<i lang="en">SlashFridays</i>
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
					<a href="https://www.youtube.com/watch?v=_48ZTyHViCU">
						<span className={styles.image}>
							<Image
								src="slash-speaker.png"
								alt="Captura de pantalla del video de la charla"
								fill
							/>
						</span>
						Enlace al video de <i lang="en">Youtube</i>
					</a>
				</p>
				<p>
					Ver las <Link href="/notes/mundo-unicornio">notas de la charla</Link>{" "}
					y <Link href="/feedback/mundo-unicornio">dar feedback</Link>
				</p>

				<h2>
					Más sobre <i lang="en">SlashFridays</i>
				</h2>
				<a href="https://slashmobility.com/blog/2024/11/accesibilidad-digital-como-construir-un-mundo-mas-inclusivo/">
					Post del blog mencionado la charla.
				</a>
				<p>
					Repasamos con En unos días entra en vigor la European Accessibility Act (EAA), una directiva que obligará a todas las empresas que operan en la Unión Europea a cumplir con estrictos requisitos de accesibilidad.

En esta charla intentaremos mantener una conversación real entre compañeros que ya se enfrentan al reto de hacer accesibles sus productos y servicios digitales. Hablaremos de forma abierta sobre resistencias, errores comunes, decisiones complejas y sobre cómo actuar cuando ya no hay más margen para excusas.

Diseño, código, cultura, responsabilidad: es hora de hablar de todo esto sin adornos ni tapujos.

· Jueves 19 de junio de 2025
· 18,00 (hora de Madrid)
· Remoto 100% por Zoom con subtítulos automatizados

Participantes:
Jorge Rebate, UX Lead en Fundación ONCE
Jordi Turull, Frontend Tech Lead MANGO
Jorge Rández, Accessibility Expert en Banco Sabadell
Raúl Marín, Figma.camp
				</p>
			</main>
		</>
	);
}
