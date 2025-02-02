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
				src={
					isAudioDescription ? '/me/video/audiodesc.mp4' : '/me/video/cv.mp4'
				}
				ref={player}
			>
				<MediaProvider>
					<Poster
						className='vds-poster'
						src='/me/video/caratula.png'
						alt='Curriculum Vitae Jordi Turull'
					/>
					{textTracks.map((track) => (
						<Track {...track} key={track.src} />
					))}
				</MediaProvider>

				<DefaultVideoLayout icons={defaultLayoutIcons} />
			</MediaPlayer>
			<button
				onClick={() => setIsAudioDescription(!isAudioDescription)}
				aria-pressed={isAudioDescription}
				className={styles.button}
			>
				Ver video {isAudioDescription ? 'sin' : 'con'} audiodescripción
			</button>
		</>
	)
}
