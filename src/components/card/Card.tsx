import Link from "next/link";
import styles from "./Card.module.css";

export function Card({
	conf,
	title,
	date,
	link,
}: Readonly<{
	conf: string;
	title: string;
	date: string;
	link: string;
}>) {
	return (
		<li className={styles.timelineItem}>
			<time dateTime={date} className={styles.date}>
				{date}
			</time>
			<div className={styles.conf}>
				<h3 className={styles.heading}>
					{conf}
				</h3>
				<Link href={link} className={styles.link}>{title}</Link>
			</div>
		</li>
	);
}
