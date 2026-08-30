import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Section } from "@/components/header/Header";
import { SpeakerLink } from "@/components/links/SpeakerLink";
import styles from "../../page.module.css";

export const metadata: Metadata = {
	title: "¿La hora de rendir cuentas? - Una conversación sin filtros sobre accesibilidad digital.",
};

export const viewport: Viewport = {
	themeColor: "#933f99",
};

export default function FigmaCamp() {
	return (
		<>
			<Header section={Section.Speaker}>
				¿La hora de rendir cuentas? - Una conversación sin filtros sobre accesibilidad digital.
			</Header>
			<main>
				<SpeakerLink />
				<p>
					En esta charla se pone sobre la mesa la necesidad de asumir responsabilidades reales en accesibilidad digital. Más allá de la normativa o de los requisitos técnicos, se reflexiona sobre cómo diseñadores, desarrolladores y equipos organizativos deben actuar con honestidad, criterio y compromiso para construir experiencias digitales inclusivas. La conversación invita a mirar con rigor qué está fallando, quién tiene que corregirlo y cómo convertir la accesibilidad en una práctica cotidiana, no en una tarea aislada o puntual.
				</p>
				<p>
					<a href="https://www.youtube.com/watch?v=_48ZTyHViCU">
						<span className={styles.image}>
							<Image
								src="/speaker/figmacamp.png"
								alt="Captura de pantalla del video de la charla"
								fill
							/>
						</span>
						Enlace al video de <i lang="en">Youtube</i>
					</a>
				</p>

				<h2>
					Más sobre Refresh
				</h2>


				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	);
}
