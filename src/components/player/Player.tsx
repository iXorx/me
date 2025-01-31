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
import { useRef } from 'react'

export function Player() {
	const player = useRef<MediaPlayerInstance>(null)

	return (
		<>
			<MediaPlayer
				className={styles.player}
				title='Presentación Jordi Turull'
				src={'https://files.vidstack.io/sprite-fight/720p.mp4'}
				crossOrigin
				playsInline
				ref={player}
			>
				<MediaProvider>
					<Poster
						className='vds-poster'
						src='https://files.vidstack.io/sprite-fight/poster.webp'
						alt='Girl walks into campfire with gnomes surrounding her friend ready for their next meal!'
					/>
					{textTracks.map((track) => (
						<Track {...track} key={track.src} />
					))}
				</MediaProvider>

				{/* Layouts */}
				<DefaultAudioLayout icons={defaultLayoutIcons} />
				<DefaultVideoLayout
					icons={defaultLayoutIcons}
					thumbnails='https://files.vidstack.io/sprite-fight/thumbnails.vtt'
				/>
			</MediaPlayer>
			<p>Presentación de Jordi Turull para la asignatura del master.</p>
		</>
	)
}
