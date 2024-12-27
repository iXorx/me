import styles from './Feedback.module.css'
import Link from 'next/link'

export function Feedback({}) {
	return (
		<section className={styles.feedback}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Feedback</h2>
				<p>
					Regálame 5 minutos de tu tiempo contestando el{' '}
					<Link href='/feedback/mundo-unicornio'>
						formulario de feedback de la charla
					</Link>
				</p>
				¡Gracias!
			</div>
		</section>
	)
}
