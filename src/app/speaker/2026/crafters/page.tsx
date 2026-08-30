import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Header, Section } from "@/components/header/Header";
import { SpeakerLink } from "@/components/links/SpeakerLink";
import styles from "../../page.module.css";

export const viewport: Viewport = {
	themeColor: "#933f99",
};

export const metadata: Metadata = {
	title: "Asteroide A11y-B-612",
};

export default function DesignOpsTalx() {
	return (
		<>
			<Header section={Section.Speaker}>
				Asteroide A11y-B-612
			</Header>
			<main>
				<SpeakerLink />
				<p>
					El 96 % de los errores de accesibilidad en la web se concentran en las mismas seis categorías desde hace siete años, y los últimos datos muestran que la tendencia va a peor.
				</p>
				<p>
					Para analizar este escenario y aprender a construir experiencias digitales más inclusivas, contaremos con Jordi T., Tech Lead y Design System Engineer con 15 años de experiencia en el sector tecnológico y especializado en desarrollo frontend.
				</p>
				<p>
					A través de un viaje inspirado en los personajes de El Principito, Jordi nos ayudará a descubrir conceptos clave de accesibilidad web, buenas prácticas y las lecciones imprescindibles para evitar los errores más habituales en nuestros proyectos.
				</p>
				<p>
					Una sesión fundamental para entender el impacto real de la accesibilidad y cómo integrarla en nuestro día a día.
				</p>

				<h2>
					Más sobre Barcelona Software Crafters
				</h2>
				<p>
					Barcelona Software Crafters es una comunidad para profesionales del desarrollo software que comparten una pasión por la calidad técnica, el aprendizaje continuo y la colaboración. Organiza meetups y eventos donde se fomentan valores como la mejora constante, el intercambio de conocimiento y la creación de espacios inclusivos, abiertos y útiles para personas con distintos perfiles y niveles de experiencia.
				</p>
				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	);
}
