import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Header, Section } from "@/components/header/Header";
import { SpeakerLink } from "@/components/links/SpeakerLink";
import styles from "../../page.module.css";

export const metadata: Metadata = {
	title: "CUIMP",
};

export const viewport: Viewport = {
	themeColor: "#933f99",
};

export default function FigmaCamp() {
	return (
		<>
			<Header section={Section.Speaker}>
				CUIMP: Disseny inclusiu: l'accessibilitat digital com a eina de transformació social
			</Header>
			<main>
				<SpeakerLink />
				<h2>CUIMPB</h2>
				<p>
					La inteligencia artificial nos ayuda a crear más rápido que nunca, pero no todo es IA: la accesibilidad digital necesita la mirada humana, el testing real con usuarios y un compromiso ético con la inclusión. Este curso ofrece una introducción práctica y profesional a la accesibilidad digital y a las competencias esenciales para diseñar y desarrollar productos digitales inclusivos en el contexto actual. El objetivo es proporcionar herramientas técnicas, metodologías de trabajo y conocimientos sobre los estándares de accesibilidad (WCAG), así como fomentar la reflexión sobre la responsabilidad profesional en el uso de herramientas de IA y las claves para implementar la accesibilidad en proyectos reales con impacto social verificable.
				</p>
				<p>
					En la mesa redonda se pretende dar respuesta a por qué la accesibilidad falla en la práctica y cómo podemos cambiarlo desde dentro de los equipos. Se abordará la creación de mecanismos que aseguren su cumplimiento y la construcción de una cultura compartida entre diseñadores y desarrolladores en la que las buenas prácticas no dependan de la buena voluntad de cada uno, sino de los procesos que las hacen inevitables.
				</p>
				<p>
					<a href="https://www.youtube.com/live/SoNHEq2q9Nw?si=gcBAqULRbOReLKln">
						<span className={styles.image}>
							<Image
								src="/speaker/plexus.png"
								alt="Captura de pantalla del video de la charla"
								fill
							/>
						</span>
						<span>Enlace al video de <i lang="en">Youtube</i></span>
					</a>
				</p>
				<h2>
					Más sobre CUIMPB
				</h2>

				<a href="https://cuimpb.cat/ca/curs/355-accessibilitat-digital">
					Disseny inclusiu: l'accessibilitat digital com a eina de transformació social.
				</a>
				<p>
					La finalidad del CUIMPB - Centre Ernest Lluch es la gestión del centro permanente de la Universidad Internacional Menéndez Pelayo (UIMP) en Barcelona. Nuestro centro universitario coordina y desarrolla las actividades propias de la UIMP: centro universitario de alta cultura, investigación y especialización, en el que convergen actividades de distintos grados y especialidades universitarias, y que tiene por misión difundir la cultura y la ciencia, así como fomentar relaciones de intercambio e información científica y cultural de interés internacional e interregional.
				</p>
				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	);
}
