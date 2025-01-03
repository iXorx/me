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
		<header className={styles[section]}>
			<div className={styles.menu}>
				<Link className={styles.link} href='/'>
					Jordi Turull
				</Link>
				<nav aria-label='Menú de navegación'>
					<ul className={styles.menuList}>
						{section === Section.Accessibility ? (
							<li aria-current='page'>Accesibilidad</li>
						) : (
							<li>
								<Link className={styles.link} href='/accessibility'>
									Accesibilidad
								</Link>
							</li>
						)}
						{section === Section.Speaker ? (
							<li aria-current='page'>
								{' '}
								<i lang='en'>Speaker</i>
							</li>
						) : (
							<li>
								<Link className={styles.link} href='/speaker'>
									<i lang='en'>Speaker</i>
								</Link>
							</li>
						)}
						{section === Section.Mentoring ? (
							<li aria-current='page'>
								<i lang='en'>Mentoring</i>
							</li>
						) : (
							<li>
								<Link className={styles.link} href='/mentoring'>
									<i lang='en'>Mentoring</i>
								</Link>
							</li>
						)}
						{section === Section.Comunidad ? (
							<li aria-current='page'>Comunidad</li>
						) : (
							<li>
								<Link className={styles.link} href='/comunidad'>
									Comunidad
								</Link>
							</li>
						)}
					</ul>
				</nav>
			</div>
			<h1 className={styles.heading}>{children}</h1>
		</header>
	)
}
