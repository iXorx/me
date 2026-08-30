import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Header, Section } from "@/components/header/Header";
import { SpeakerLink } from "@/components/links/SpeakerLink";
import styles from "../../page.module.css";

export const metadata: Metadata = {
	title: "Activismo positivo",
};

export const viewport: Viewport = {
	themeColor: "#933f99",
};

export default function ActivismoPositivo() {
	return (
		<>
			<Header section={Section.Speaker}>
				Activismo positivo
			</Header>
			<main>
				<SpeakerLink />
				<p>
					Hablamos de accesibilidad y web inclusiva con Andrea Villallonga.
				</p>
				<p>
					En esta conversación hablamos sobre la importancia de crear entornos digitales más accesibles e inclusivos, y cómo la actitud, la empatía y la responsabilidad colectiva influyen en la forma en que diseñamos y consumimos la web. Andrea comparte su visión sobre cómo pequeñas decisiones técnicas y humanas pueden marcar una gran diferencia para que más personas puedan participar plenamente en el entorno digital. En esa charla también comparto mi propia historia: cómo una mirada positiva y una actitud de superación pueden transformar no solo la forma de vivir el día a día, sino también la manera de enfrentarse a los retos, la discapacidad y la exclusión.
				</p>
				<p>
					<a href="https://www.youtube.com/watch?v=ykbPMBqGPRs">
						<span className={styles.image}>
							<Image
								src="/speaker/activismo.png"
								alt="Captura de pantalla del video de la charla"
								fill
							/>
						</span>
						<span>Enlace al video de <i lang="en">Youtube</i></span>
					</a>
				</p>
				<h2>
					Más sobre Activismo Positivo
				</h2>
				<p>
					Tener una actitud positiva puede ayudarnos mucho a enfrentarnos a las dificultades que aparecen cada día: un proyecto que se resiste, un cliente más exigente de lo esperado o la adaptación constante al entorno digital. Cuando solo nos enfocamos en lo negativo y en todo lo que puede salir mal, tendemos a bloquearnos antes de tiempo. En cambio, una mirada más optimista puede ser precisamente el impulso que necesitamos para avanzar, aprender y sacar lo mejor de nosotros mismos.
				</p>
				<p>
					En este episodio, Andrea Villallonga, consultora de comunicación e imagen, nos presenta su movimiento Activismo Positivo y nos explica cómo cambiar nuestra forma de pensar para crear una mentalidad más sana, resistente y constructiva. Como ella misma afirma, no se nace positivo: se practica. Al igual que el deporte o cualquier otra habilidad, el pensamiento positivo requiere entrenamiento, constancia y voluntad. Es normal tener días más bajos o cansados, pero también es importante dar un giro, recuperar el ánimo y elegir una actitud más valiente y útil, porque al final somos nosotros quienes más salimos beneficiados.
				</p>
				<p>
					Andrea es muy conocida por su paso por Operación Triunfo como profesora de imagen, pero antes de eso ya había construido una larga trayectoria profesional, incluida su presencia en La Vanguardia con un videoblog propio. Actualmente está centrada en su canal de Twitch, donde comparte y difunde el Activismo Positivo con una mezcla de reflexión, práctica y motivación.
				</p>
				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	);
}
