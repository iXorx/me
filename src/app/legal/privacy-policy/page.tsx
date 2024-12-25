import { Header } from '@/components/header/Header'
import Head from 'next/head'

export default function PrivacyPolicy() {
	return (
		<>
			<Head>
				<title>Política de privacidad</title>
				<meta name='theme-color' content='var(--accent)' />
			</Head>
			<Header>Política de privacidad</Header>
			<main>
				<strong>
					Esta política de privacidad no es real, solo es con objetivos
					didácticos
				</strong>
				<p>
					Bienvenido a nuestro sitio web. Nos comprometemos a proteger su
					privacidad. Esta política de privacidad explica cómo recopilamos,
					usamos y protegemos su información personal.
				</p>
				<h2>Información que recopilamos</h2>
				<p>
					Recopilamos información que usted nos proporciona directamente, como
					cuando se registra en nuestro foro, publica contenido o se comunica
					con nosotros. Esta información puede incluir su nombre, dirección de
					correo electrónico y cualquier otra información que decida
					proporcionar.
				</p>
				<h2>Uso de la información</h2>
				<p>
					Utilizamos la información que recopilamos para proporcionar, mantener
					y mejorar nuestros servicios, así como para comunicarnos con usted. No
					compartimos su información personal con terceros, excepto cuando sea
					necesario para cumplir con la ley o proteger nuestros derechos.
				</p>
				<h2>Seguridad</h2>
				<p>
					Tomamos medidas razonables para proteger su información personal
					contra pérdida, robo y uso no autorizado. Sin embargo, ninguna
					transmisión de datos por Internet o sistema de almacenamiento puede
					garantizarse como 100% seguro.
				</p>
				<h2>Cookies</h2>
				<p>
					Utilizamos cookies para mejorar su experiencia en nuestro sitio web.
					Puede configurar su navegador para rechazar las cookies, pero esto
					puede afectar la funcionalidad del sitio.
				</p>
				<h2>Cambios a esta política</h2>
				<p>
					Podemos actualizar esta política de privacidad de vez en cuando. Le
					notificaremos sobre cualquier cambio publicando la nueva política en
					nuestro sitio web.
				</p>
				<h2>Contacto</h2>
				<p>
					Si tiene alguna pregunta sobre esta política de privacidad, por favor
					contáctenos a través de nuestro formulario de contacto en el sitio
					web.
				</p>
			</main>
		</>
	)
}
