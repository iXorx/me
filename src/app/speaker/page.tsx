import Head from "next/head";
import Image from "next/image";
import { Card } from "@/components/card/Card";
import { Header, Section } from "@/components/header/Header";
import styles from "./page.module.css";

export const viewport = {
	themeColor: "#933f99",
};

export default function Speaker() {
	return (
		<>
			<Head>
				<title lang="en">Speaker</title>
			</Head>
			<Header section={Section.Speaker}>
				<i lang="en">Speaker</i>
			</Header>
			<main>
				<p>
					Tengo una pasión por compartir conocimientos y experiencias profesionales.
					He participado como ponente en múltiples conferencias y eventos
					de tecnología, accesibilidad digital y metodologías de desarrollo.
				</p>
				<p>
					Si consideras que mi perfil se alinea con los objetivos de tu evento o conferencia,
					te invito a{" "}
					<a href="mailto:hi@jorditurull.me">contactarme directamente</a> para explorar
					posibles colaboraciones.
				</p>
				<section>
					<h2>¿Dónde he hablado?</h2>
					<div className={styles.timeline}>
						<ul className={styles.list}>
							<li>2026</li>
							<Card
								title="Mas humanos que los humanos"
								conf="Fabrics"
								date="28/05/2026"
								link="speaker/2026/fabrics"
							/>
							<Card
								title="Disseny inclusiu, l'accessbilitat digital. Com a eina de transformació social."
								conf="CUIMP"
								date="22/04/2026"
								link="speaker/2026/cuimp"
							/>
							<li>2025</li>
							<Card
								title="¿La hora de rendir cuentas? - Una conversación sin filtros sobre accesibilidad digital."
								conf="Figma.camp"
								date="19/06/2025"
								link="speaker/2025/figmacamp"
							/>
							<Card
								title="Sesión práctica de accesibilidad Web para Devs"
								conf="DesignOpsTalx"
								date="28/02/2025"
								link="speaker/2025/designopstalx"
							/>
							<li>2024</li>
							<Card
								title="Mundo unicornio 🦄 testing + accesibilidad"
								conf="SlahFridays"
								date="15/11/2024"
								link="speaker/2024/slashfridays"
							/>
							<Card
								title="Mundo unicornio 🦄 testing + accesibilidad"
								conf="DevBcn"
								date="13/06/2024"
								link="speaker/2024/devbcn"
							/>
							<Card
								title="Mundo unicornio 🦄 testing + accesibilidad"
								conf="VLC Tech Fest"
								date="08/06/2024"
								link="speaker/2024/vlctechfest"
							/>
							<Card
								title="Mundo unicornio 🦄 testing + accesibilidad"
								conf="Fabrics"
								date="06/06/2024"
								link="speaker/2024/fabrics"
							/>
							<li>2023</li>
							<Card
								title="Mejorando la accesibilidad de tu aplicación con react-testing-library 🐙"
								conf="Garaje de Ideas"
								date="12/07/2023"
								link="speaker/2023/garajedeideas"
							/>
							<Card
								title="Extendiendo los microservicios al frontend: Microfrontends."
								conf="DevBcn"
								date="03/07/2023"
								link="speaker/2023/devbcn"
							/>
							<li>2021</li>
							<Card
								title="Charla con Jordi Turull"
								conf="Activismo Positivo"
								date="19/05/2021"
								link="speaker/2021/activismopositivo"
							/>
						</ul>
					</div>
				</section>
			</main>
		</>
	);
}
