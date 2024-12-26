import styles from './Header.module.css'
import Link from 'next/link'

export enum Section {
	Default = 'default',
	Accessibility = 'accessibility',
	Speaker = 'speaker',
	Mentoring = 'mentoring',
	Comunidad = 'comunidad',
	Notes = 'notes',
}

export function Header({
	children,
	section = Section.Default,
}: Readonly<{ children: React.ReactNode; section?: Section }>) {
	return (
		<header className={`${styles[section]} ${styles.header}`}>
			<div className={styles.menu}>
				<Link href='/'>Jordi Turull</Link>
				<nav aria-label='Menú de navegación'>
					<ul className={styles.menuList}>
						<li>
							<Link href='/accessibility'>Accesibilidad</Link>
						</li>
						<li>
							<Link href='/speaker'>Speaker</Link>
						</li>
						<li>
							<Link href='/mentoring'>Mentor</Link>
						</li>
						<li>
							<Link href='/comunidad'>Comunidad</Link>
						</li>
					</ul>
				</nav>
			</div>
			<h1 className={styles.heading}>{children}</h1>
		</header>
	)
}
