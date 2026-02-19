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

export default function DesignOpsTalx() {
	return (
		<>
			<Head>
				<title lang="en">Design Ops Talx</title>
			</Head>
			<Header section={Section.Speaker}>
				<i lang="en">Design Ops Talx</i>
			</Header>
			<main>
				<SpeakerLink />
				<h2>Sesión práctica de accesibilidad Web para Devs</h2>
				<p>
					<a href="https://www.youtube.com/watch?v=njWbvJ9R3bo">
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
				<h2>
					Más sobre <i lang="en">DesignOpsTalx</i>
				</h2>
				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	);
}
