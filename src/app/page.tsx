import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<header>
				<h1 className={styles.name}>Jordi Turull</h1>
			</header>
			<main>
				<section>
					<div className={styles.presentation}>
						<Image
							src='/profile.jpeg'
							alt='Hombre de piel blanca, mediana edad, pelo corto moreno y barba corta. Lleva una camisa azul abierta con camiseta negra debajo'
							width='280'
							height='280'
							className={styles.avatar}
							fetchPriority='high'
						/>
						<nav className={styles.text}>
							<ul>
								<li>
									<Link href='/accessibility'>Accessibility</Link>
								</li>
								<li>
									<Link href='/speaker'>Speaker</Link>
								</li>
								<li>
									<Link href='/mentoring'>Mentoring</Link>
								</li>
								<li>
									<Link href='/comunidad'>Comunidad</Link>
								</li>
							</ul>
						</nav>
					</div>
				</section>

				<p>
					Con 15 años de experiencia en el mundo del desarrollo web, he
					trabajado en empresas y proyectos de diferentes tamaños y sectores.
				</p>
				<p>
					Actualmente, soy Frontend Lead en{' '}
					<a href='https://shop.mango.com'>Mango.com</a> a la vez que gestiono
					mi proyecto personal en{' '}
					<a href='https://app.happergy.es'>Happergy.es</a>, ayudando a la gente
					a ahorrar en su factura de la luz.
				</p>
				<br />
				<p>
					Apasionado por la <Link href='/accessibility'>Accesibilidad</Link>, me
					gusta compartir mis conocimientos como{' '}
					<Link href='/speaker'>Speaker</Link> y ayudar a la gente con mis
					sesiones de <Link href='/mentoring'>Mentoring</Link>. Si tienes mas
					dudas, no dudes en dejar tu pregunta en nuestra{' '}
					<Link href='/comunidad'>Comunidad</Link>.
				</p>
			</main>
		</>
	)
}
