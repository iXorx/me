import './globals.css'
import { Footer } from '@/components/footer/Footer'
import localFont from 'next/font/local'
import Head from 'next/head'

const satoshi = localFont({
	src: [
		{
			path: '../../public/Satoshi-Medium.woff2',
			weight: '400',
			style: 'normal',
		},
	],
})

// TODO: add analytics

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='es' className={satoshi.className}>
			<Head>
				<meta name='theme-color' content='#000000' />
			</Head>
			<body>
				{children}
				<Footer />
			</body>
		</html>
	)
}
