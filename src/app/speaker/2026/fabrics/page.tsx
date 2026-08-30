import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Header, Section } from "@/components/header/Header";
import { SpeakerLink } from "@/components/links/SpeakerLink";
import styles from "../../page.module.css";

export const viewport: Viewport = {
	themeColor: "#933f99",
};

export const metadata: Metadata = {
	title: "Mas humanos que los humanos",
};

export default function DesignOpsTalx() {
	return (
		<>
			<Header section={Section.Speaker}>
				Mas humanos que los humanos
			</Header>
			<main>
				<SpeakerLink />
				<h2>Mas humanos que los humanos</h2>
				<p>
					Hablando de accesibilidad y transhumanismo delante de 350 personas en un cine!
				</p>
				<p>

					Empecé mi charla recordando el caos del gran apagón del 28 de abril: ese día, cuando se fue la luz, descubrimos con miedo que sin electricidad no podíamos ni comer ni pagar. Esa vulnerabilidad me llevó a la pregunta central de mi intervención: ¿en qué momento la tecnología deja de ser una herramienta externa para convertirse en parte de quiénes somos?
				</p>
				<p>
					Para responderlo, llevé a la audiencia a un viaje desde las primeras prótesis del Egipto antiguo hasta la vanguardia actual. Presenté a Rodney Gorham, que controla su hogar con la mente gracias a un implante no invasivo; a Noland Arbaugh, el primer usuario de Neuralink que juega videojuegos solo con el pensamiento; a Blake Leeper, el atleta cuya prótesis fue tan perfecta que le impidieron competir contra corredores no amputados; y a Neil Harbisson, quien, tras implantarse una antena en el cráneo, ya no ve los colores, sino que los escucha.
				</p>
				<p>
					A través de estas historias, exploramos el corazón del transhumanismo y el delicado equilibrio entre la bioética y la biopolítica. Nos preguntamos: ¿dónde está el límite entre curar una discapacidad y crear una ventaja injusta? ¿Quién decide qué es un cuerpo "normal"? Frente al miedo de Michael Sandel a perder nuestra solidaridad humana, contrapuse la visión de Angel Giuffria, para quien sus prótesis biónicas son su identidad innegociable.
				</p>
				<p>
					Mi conclusión fue un llamada a la reflexión: no estamos ante el fin de la humanidad, sino ante su siguiente paso evolutivo. La tecnología ya no nos repara; nos redefine. Y la verdadera pregunta que dejé no es hasta dónde podemos llegar, sino si tendremos la sabiduría para asegurar que esta evolución nos haga más libres y no solo más diferentes.
				</p>
				<p className={styles.image}>
					<Image
						src="/speaker/fabrics26.jpg"
						alt="Captura de pantalla del video de la charla"
						fill
						style={{ objectFit: "contain" }}
					/>
				</p>
				<h2>
					Más sobre Fabrics
				</h2>
				<p>
					La tercera edición de Fabrics, nuestro evento anual de Tecnología, Datos, Privacidad y Seguridad, reunió a la comunidad tecnológica para explorar cómo la innovación está dando forma al futuro de la moda. El evento contó con más de 350 asistentes de diferentes equipos, reflejando un impulso compartido por aprender, crecer y superar límites.
				</p>
				<p>
					Fabrics 2026 presentó 11 ponencias que mostraron los límites de la tecnología minorista. Desde el uso práctico de la Inteligencia Artificial y la Visión por Computador para analizar prendas, hasta debates relevantes sobre ética, sostenibilidad y el equilibrio entre ingeniería y humanidades.
				</p>
				<p>
					La Fabrics de este año demostró que el verdadero valor de la innovación está en las personas que hay detrás de ella, aquellas que la impulsan, la cuestionan y la utilizan para transformar nuestro negocio y elevar la experiencia que ofrecemos a nuestros clientes.</p>
				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	);
}
