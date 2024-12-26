import { Header, Section } from '@/components/header/Header'
import type { Viewport } from 'next'
import Head from 'next/head'

export const viewport: Viewport = {
	themeColor: '#933f99',
}

export default function Speaker() {
	return (
		<>
			<Head>
				<title>Speaker</title>
				<meta name='theme-color' content='var(--speaker)' />
			</Head>
			<Header section={Section.Speaker}>Speaker</Header>
			<main>
				<p>
					Speaker is the practice of making your websites usable by as many
					people as possible. We traditionally think of this as being about
					people with disabilities, but the practice of making sites accessible
					also benefits other groups such as those using mobile devices, or
					those with slow network connections.
				</p>
				<p>
					There are many things you can do to make your site more accessible.
					This includes:
				</p>
				<ul>
					<li>Using semantic HTML</li>
					<li>Providing good keyboard navigation</li>
					<li>Providing good focus indicators</li>
					<li>Using ARIA roles and properties</li>
					<li>Ensuring your site works with screen readers</li>
					<li>Testing with real users</li>
				</ul>
				<p>
					This section includes some examples to demonstrate how you can make
					your site more accessible.
				</p>
			</main>
		</>
	)
}
