import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export function Card({
	conf,
	title,
	date,
	image,
	summary,
	link,
}: Readonly<{
	conf: string
	title: string
	date: string
	image: string
	summary: string
	link: string
}>) {
	return (
		<article className={styles.card}>
			<Image src={image} alt={`Logo ${title}`} width={200} height={50} />
			<h3 id={`${title}-${date}`}>{title}</h3>
			<p className={styles.conf}>{conf}</p>
			<time dateTime={date}>{date}</time>
			<p>{summary}</p>
			<Link href={link} aria-describedby={`${title}-${date}`}>
				Ver detalle
			</Link>
		</article>
	)
}
