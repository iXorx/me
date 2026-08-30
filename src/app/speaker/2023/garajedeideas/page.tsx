import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Header, Section } from "@/components/header/Header";
import { SpeakerLink } from "@/components/links/SpeakerLink";
import styles from "../../page.module.css";

export const metadata: Metadata = {
	title: "Mejorando la accesibilidad de tu aplicación con react-testing-library",
};

export const viewport: Viewport = {
	themeColor: "#933f99",
};

export default function Garaje() {
	return (
		<>
			<Header section={Section.Speaker}>
				Mejorando la accesibilidad de tu aplicación con react-testing-library 🐙
			</Header>
			<main>
				<SpeakerLink />
				<p>
					En esta charla hablamos sobre la importancia de la accesibilidad en aplicaciones web y de cómo mejorarla desde el propio proceso de testing. A través de react-testing-library, exploramos cómo validar que la interfaz sea usable no solo visualmente, sino también para personas que navegan con teclado, lectores de pantalla u otras tecnologías de asistencia. La idea es comprobar que los elementos sean semánticamente correctos, estén correctamente etiquetados y que la experiencia sea comprensible para todos los usuarios.
				</p>
				<p>
					<a href="https://www.youtube.com/watch?v=oTi_MwsBohE">
						<span className={styles.image}>
							<Image
								src="/speaker/garaje.png"
								alt="Captura de pantalla del video de la charla"
								fill
							/>
						</span>
						<span>Enlace al video de <i lang="en">Youtube</i></span>
					</a>
				</p>
				<h2>
					Más sobre "Garaje de Ideas"
				</h2>
				<p>
					Garaje de ideas | Digital Company for nonconformists. Si te has instalado la fibra de Telefónica, te has tomado un cóctel con Red Bull a media tarde, has contratado una hipoteca en el Santander o consultado tu factura de Endesa… entonces quizás nos conozcas más de lo que crees.
				</p>
				<p>
					En Garaje combinamos Tecnología, Diseño, Data y Growth para crear servicios y productos intuitivos y conectados que mejoran la vida de las personas y h</p>
				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	);
}
