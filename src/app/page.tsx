import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<header>
				<h1 className={styles.name}>
					Jordi Turull — Frontend Lead en Mango | Accesibilidad y Speaker
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
					Soy Jordi Turull, Frontend Lead con más de 15 años diseñando y
					construyendo experiencias digitales accesibles y rápidas. Me
					especializo en accesibilidad web (WCAG, a11y), rendimiento
					frontend, arquitectura en React y Next.js, y en la mejora de
					conversiones mediante optimización técnica.
				</p>
				<p>
					Actualmente lidero el equipo frontend en <a href="https://shop.mango.com">Mango.com</a>,
					donde trabajo en arquitectura, rendimiento y accesibilidad. Además,
					dirijo <a href="https://app.happergy.es">Happergy.es</a>, una plataforma
					orientada a la eficiencia energética que ayuda a reducir la factura
					eléctrica de los usuarios.
				</p>
				<p>
					Comparto conocimientos como <Link href="/speaker">conferenciante</Link>,
					ofrezco <Link href="/mentoring">mentoring</Link> en accesibilidad,
					performance y buenas prácticas frontend, y colaboro con equipos para
					mejorar la calidad y usabilidad de productos digitales.
				</p>
			</main>
		</>
	);
}
