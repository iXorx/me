'use client'

import styles from './Player.module.css'
import { textTracks } from './tracks'
import {
	MediaPlayer,
	MediaProvider,
	Poster,
	Track,
	type MediaPlayerInstance,
} from '@vidstack/react'
import {
	DefaultAudioLayout,
	defaultLayoutIcons,
	DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default'
import '@vidstack/react/player/styles/default/layouts/video.css'
import '@vidstack/react/player/styles/default/theme.css'
import { useRef, useState } from 'react'

export function Player() {
	const player = useRef<MediaPlayerInstance>(null)
	const [isAudioDescription, setIsAudioDescription] = useState<boolean>(false)

	return (
		<>
			<MediaPlayer
				className={styles.player}
				title='Presentación Jordi Turull'
				src={isAudioDescription ? 'video/audiodesc.mp4' : 'video/cv.mp4'}
				crossOrigin
				ref={player}
			>
				<MediaProvider>
					<Poster
						className='vds-poster'
						src='video/caratula.png'
						alt='Curriculum Vitae Jordi Turull'
					/>
					{textTracks.map((track) => (
						<Track {...track} key={track.src} />
					))}
				</MediaProvider>

				<DefaultAudioLayout icons={defaultLayoutIcons} />
				<DefaultVideoLayout
					icons={defaultLayoutIcons}
				/>
			</MediaPlayer>
			<button onClick={() => setIsAudioDescription(!isAudioDescription)} aria-pressed={isAudioDescription} className={styles.button}>
				Ver video {isAudioDescription ? 'sin' : 'con'} audiodescripción
			</button>
			<p>Presentación de Jordi Turull para la asignatura del master.</p>
			<ul aria-label='Entrega de la asignatura'>
				<li>
					<a href="video/cv.mp4">
						Video sin audiodescripción
					</a>
				</li>
				<li>
					<a href="video/audiodesc.mp4">
						Video con audiodescripción
					</a>
				</li>
				<li>
					<a href="video/cv.vtt">
						Subtítulos en español
					</a>
				</li>
			</ul>
		</>
	)
}
