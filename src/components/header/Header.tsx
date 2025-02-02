import styles from './Header.module.css'
import Link from 'next/link'

export enum Section {
	Default = 'default',
	Accessibility = 'accessibility',
	Speaker = 'speaker',
	Mentoring = 'mentoring',
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
							<li aria-current='page' lang='en'>
								Speaker
							</li>
						) : (
							<li lang='en'>
								<Link className={styles.link} href='/speaker'>
									Speaker
								</Link>
							</li>
						)}
						{section === Section.Mentoring ? (
							<li aria-current='page' lang='en'>
								Mentoring
							</li>
						) : (
							<li lang='en'>
								<Link className={styles.link} href='/mentoring'>
									Mentoring
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
