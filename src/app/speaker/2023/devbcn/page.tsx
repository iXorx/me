import type { Metadata, Viewport } from "next";
import { Header, Section } from "@/components/header/Header";
import { SpeakerLink } from "@/components/links/SpeakerLink";

export const metadata: Metadata = {
	title: "Extendiendo los microservicios al frontend",
};

export const viewport: Viewport = {
	themeColor: "#933f99",
};

export default function ExtendiendoLosMicroserviciosAlFrontend() {
	return (
		<>
			<Header section={Section.Speaker}>
				Extendiendo los microservicios al frontend
			</Header>
			<main>
				<SpeakerLink />
				<p>
					¿Cómo podemos aprovechar la arquitectura de microservicios en el desarrollo frontend? Presentaremos cómo en Mango hemos extendido esta arquitectura al frontend mediante la implementación de Microfrontends.
				</p><p>
					Microfrontends se refiere a la práctica de dividir una aplicación frontend en múltiples pequeñas e independientes, permitiendo que cada equipo pueda trabajar en su propia aplicación sin afectar a los demás.
				</p><p>
					En Mango, hemos implementado Microfrontends usando las últimas versiones de React con tecnologías como Web Components y Module Federation de Webpack integrados en un ciclo de QA y CICD. Compartiremos nuestra experiencia en esta implementación, cómo no hacerlo, en qué hemos fallado, las soluciones que hemos encontrado y los resultados obtenidos.
				</p>
				<p>
					En esta charla compartida con Borja Fernandez, hablaremos de cómo hemos extendido la arquitectura de microservicios al frontend mediante la implementación de Microfrontends en Mango, y cómo esto nos ha permitido mejorar la eficiencia y la calidad del desarrollo frontend.
				</p>
				<h2>
					Más sobre DevBcn
				</h2>
				<p>
					DevBcn es la conferencia tecnológica más relevante de Barcelona para profesionales del desarrollo y del ecosistema digital. En su edición de 2023 reunió a desarrolladores, arquitectos, líderes técnicos y perfiles de cloud, frontend, backend, IA, DevOps y gestión del producto para compartir conocimiento, experiencias y tendencias en un entorno muy orientado a la comunidad.
				</p>
				<p>
					La conferencia se consolidó como un punto de encuentro para aprender de la mano de expertos internacionales y conectar con profesionales de toda Europa. Con un formato de dos días, charlas, networking y espacios de intercambio, DevBcn ofrecía una visión completa del estado del desarrollo software y de la evolución de tecnologías como Java, JVM, cloud, frontend y otras disciplinas del entorno tecnológico actual.
				</p>
				<p>¡Gracias por la oportunidad!</p>
			</main>
		</>
	);
}
