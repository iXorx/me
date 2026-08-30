import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Header, Section } from "@/components/header/Header";
import { SpeakerLink } from "@/components/links/SpeakerLink";
import styles from "../../page.module.css";

export const metadata: Metadata = {
	title: "Design Ops Talx",
};

export const viewport: Viewport = {
	themeColor: "#933f99",
};

export default function DesignOpsTalx() {
	return (
		<>
			<Header section={Section.Speaker}>
				<i lang="en">Design Ops Talx</i>
			</Header>
			<main>
				<SpeakerLink />
				<h2>Sesión práctica de accesibilidad Web para Devs</h2>
				<p>
					Con la normativa europea en marcha y menos de 200 días para el cumplimiento, Jordi y Andrés exponen las técnicas que separarán a los líderes del mercado de los que quedarán atrás.
				</p><p>
					En este episodio hablamos de:
					<ul>
						<li>
							El HACK secreto del CSS que detecta automáticamente imágenes sin texto alternativo en producción
						</li>
						<li>
							Por qué el 70% de los problemas de accesibilidad NO se detectan con herramientas automáticas, y qué hacer al respecto
						</li>
						<li>
							La técnica del árbol de accesibilidad que EXPONE errores invisibles en tu DOM
						</li>
						<li>
							Cómo Chrome DevTools puede convertirte en un DETECTIVE de contrastes con un solo clic
						</li>
						<li>
							El error MORTAL de botones anidados que mata la navegación por teclado
						</li>
						<li>
							La estrategia de "skip links" que usan sitios del gobierno para cumplir normativa TRIPLE A
						</li>
						<li>
							Por qué diseñar pensando en Design Systems MULTIPLICA tu compliance sin esfuerzo extra
						</li>
					</ul>
				</p>
				<p>
					<a href="https://www.youtube.com/watch?v=njWbvJ9R3bo">
						<span className={styles.image}>
							<Image
								src="/speaker/designops.png"
								alt="Captura de pantalla del video de la charla"
								fill
							/>
						</span>
						Enlace al video de <i lang="en">Youtube</i>
					</a>
				</p>
				<h2>
					Más sobre <i lang="en">DesignOpsTalx</i>
				</h2>
				<p>
					DesignOps Talx es una comunidad y espacio de encuentro para profesionales de diseño, producto y tecnología que quieren explorar cómo mejorar la colaboración entre diseño, ingeniería y negocio. A través de sesiones, conversaciones y experiencias prácticas, se comparte conocimiento sobre Design Ops, sistemas de diseño, accesibilidad, procesos, cultura y herramientas que ayudan a construir productos más sostenibles, inclusivos y escalables.
				</p>
				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	);
}
