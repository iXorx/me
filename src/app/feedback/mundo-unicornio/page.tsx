import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Header, Section } from "@/components/header/Header";
import { SpeakerLink } from "@/components/links/SpeakerLink";
import styles from "./page.module.css";

export const metadata: Metadata = {
	title: "Feedback: Mundo unicornio 🦄 testing + accesibilidad",
};

export const viewport: Viewport = {
	themeColor: "#573697",
};

export default function MundoUnicornio() {
	return (
		<>
			<Header section={Section.Notes}>
				Feedback: Mundo unicornio 🦄 testing + accesibilidad
			</Header>
			<main className={styles.main}>
				<div className={styles.intro}>
					<SpeakerLink />
					<p>
						<Link href="/notes/mundo-unicornio">Ver notas de la charla</Link>
					</p>
				</div>
				<iframe
					title="Formulario de feedback de la charla de Mundo unicornio: testing + accesibilidad"
					style={{ width: "100vw", border: "none", height: 1200 }}
					src="https://docs.google.com/forms/d/e/1FAIpQLScGLdqc4powITCRznrnB-FtJeezlhVyY1Ys8bUJLl--ZV4D2A/viewform?embedded=true"
				>
					Cargando…
				</iframe>
			</main>
		</>
	);
}
