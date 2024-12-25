import { Github } from '../icons/Github'
import { LinkedIn } from '../icons/LinkedIn'
import { Mail } from '../icons/Mail'
import styles from './Footer.module.css'
import Link from 'next/link'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<ul aria-label='Links sociales' className={styles.social}>
				<li>
					<a
						href='https://github.com/iXorx/me'
						aria-label='Github'
						className={styles.socialLink}
					>
						<Github />
					</a>
				</li>
				<li>
					<a
						href='https://www.linkedin.com/in/alejandro-sanchez-dev'
						aria-label='LinkedIn'
						className={styles.socialLink}
					>
						<LinkedIn />
					</a>
				</li>
				<li>
					<a
						href='mailto:hi@jorditurull.me'
						aria-label='Email'
						className={styles.socialLink}
					>
						<Mail />
					</a>
				</li>
			</ul>
			<ul aria-label='Links legales' className={styles.legal}>
				<li>
					<Link href='/legal/privacy-policy'>Política de privacidad</Link>
				</li>
				<li>
					<Link href='/legal/legal-terms'>Aviso legal</Link>
				</li>
			</ul>
		</footer>
	)
}
