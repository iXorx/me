import styles from './Card.module.css'
import Link from 'next/link'
import React from 'react'

export function Card({
	conf,
	title,
	date,
	link,
	heading,
}: Readonly<{
	conf: string
	title: string
	date: string
	link: string
	heading: React.ReactNode
}>) {
	return (
		<li>
			<article className={styles.card}>
				<div className={styles.heading}>{heading}</div>
				<div className={styles.content}>
					<h3 className={styles.conf} id={`${conf}-${date}`}>
						{conf} (<time dateTime={date}>{date})</time>
					</h3>
					<div>{title}</div>
					<Link href={link} aria-describedby={`${conf}-${date}`}>
						Ver detalle
					</Link>
				</div>
			</article>
		</li>
	)
}
