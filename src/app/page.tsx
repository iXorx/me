import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<header>
				<h1 className={styles.name}>
					Jordi Turull — Frontend Lead
					<div>Accesibilidad y Speaker</div>
				</h1>
			</header>
			<main>
				<section>
					<div className={styles.presentation}>
						<Image
							src="profile.jpeg"
							alt="Hombre de piel blanca, mediana edad, pelo corto moreno y barba corta. Lleva una camisa azul abierta con camiseta negra debajo"
							width="280"
							height="280"
							className={styles.avatar}
							fetchPriority="high"
						/>
						<nav className={styles.text}>
							<ul>
								<li className={styles.item}>
									<Link className={styles.link} href="accessibility">
										Accesibilidad
									</Link>
								</li>
								<li className={styles.item}>
									<Link className={styles.link} href="speaker">
										<i lang="en">Speaker</i>
									</Link>
								</li>
								<li className={styles.item}>
									<Link className={styles.link} href="/mentoring">
										<i lang="en">Mentoring</i>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</section>

				<p>
					Jordi Turull es ingeniero informático y técnico en realización de audiovisuales, con más de 15 años de experiencia en el sector tecnológico.
				</p>
				<p>
					Le apasionan el diseño, la fotografía y el deporte. Desde 2020, ha incorporado la accesibilidad web a sus intereses, dedicando tiempo a difundir y sensibilizar sobre este tema crucial tanto dentro como fuera de la empresa. Especializado en frontend, se enfoca en accesibilidad web (WCAG, a11y), rendimiento frontend, arquitectura en React y Next.js, y en la mejora de conversiones mediante optimización técnica.
				</p>
				<p>
					Actualmente desempeña el rol de Tech Lead y Design System Engineeren <a href="https://shop.mango.com">Mango.com</a>, trabajando en arquitectura, rendimiento y accesibilidad. Además, dirige <a href="https://app.happergy.es">Happergy.es</a>, una plataforma orientada a la eficiencia energética que ayuda a reducir la factura eléctrica de los usuarios.
				</p>
				<p>
					Comparte conocimientos como <Link href="/speaker">conferenciante</Link>, ofrece <Link href="/mentoring">mentoring</Link> en accesibilidad, performance y buenas prácticas frontend, y colabora con equipos para mejorar la calidad y usabilidad de productos digitales.
				</p>
			</main>
		</>
	);
}
