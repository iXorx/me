import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Header, Section } from "@/components/header/Header";
import { SpeakerLink } from "@/components/links/SpeakerLink";
import styles from "../../page.module.css";

export const metadata: Metadata = {
	title: "La accesibilidad del futuro en el GAAD de Plexus",
};

export const viewport: Viewport = {
	themeColor: "#933f99",
};

export default function Plexus() {
	return (
		<>
			<Header section={Section.Speaker}>
				La accesibilidad del futuro en el GAAD de Plexus
			</Header>
			<main>
				<SpeakerLink />
				<h2>La accesibilidad del futuro en el GAAD de Plexus</h2>
				<p>
					La accesibilidad digital acomete una etapa también marcada por nuevos retos: inteligencia artificial, evolución normativa, design systems, desarrollo multiplataforma y entornos digitales cada vez más complejos. En esta mesa hablaremos de cómo integrar la accesibilidad en las decisiones que están definiendo el futuro de la tecnología.
				</p>
				<p>
					<a href="https://youtu.be/M2gDZbjpeHA">
						<span className={styles.image}>
							<Image
								src="/speaker/plexus.png"
								alt="Captura de pantalla del video de la charla"
								fill
							/>
						</span>
						Enlace al video de <i>Youtube</i>
					</a>
				</p>
				<h2>
					Más sobre Plexus
				</h2>
				<a href="https://www.linkedin.com/posts/conclusiones-gaad-plexus-tech-2026-ugcPost-7466067916518780928-vCWT/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAASg56IBEyKfHltNXYi9Nb7FdA_P9ydAnzU">
					Anuncio en LinkedIn del evento
				</a>
				<p>
					El GAAD de Plexus Tech empieza con un folio en blanco y muchas ideas de un grupo del área de accesibilidad llamado "senior muy senior".
				</p><p>
					Después llega el equipo de estrategia, que convierte esas ideas en realidad, y los compañeros de sistemas, que lo hacen posible hasta el final. Sin todas esas manos, nada saldría como sale. Un año más todos los que somos Plexus Tech apostamos por la accesibilidad y por conseguir que no se hable de ella solo una vez al año.
				</p>
				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	);
}
