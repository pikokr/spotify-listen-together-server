import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import SongInfo from '../../backend/web-shared/songInfo'
import config from '../../config'
import ClientList from '../components/clientList'
import Song from '../components/song'
import { FaGithub, FaQuestion } from 'react-icons/fa'

const Index: NextPage = () => {
  const router = useRouter()
  const [songInfo, setSongInfo] = useState<SongInfo | undefined>(undefined)
  const [clients, setClients] = useState<any[]>([])

  useEffect(() => {
    const socket = io()
    socket.on('songInfo', (songInfo: SongInfo) => setSongInfo(songInfo))
    socket.on('listeners', (clients: any) => setClients(clients))
    socket.on('connect', () => {
      console.log('connected!')
      socket.emit('requestSongInfo')
      socket.emit('requestListeners')
    })
  }, [])

  const host = React.useMemo(() => {
    return clients.find((x) => x.isHost)
  }, [clients])

  // return <div className="main">
  //   <div className={styles.contentContainer}>
  //     <br/>
  //     <div className={styles.header}>Your friends are currently listening to...</div>
  //     <br/>
  //     <Song song={songInfo}/>
  //     <br/><br/><br/>
  //     <div className={styles.header}>Who&apos;s listening?</div>
  //     <br/>
  //     <ClientList listeners={clients}/>
  //     <br/><br/><br/>
  //     <button className={styles.button} onClick={() => {
  //       window.open(`spotify:listentogether:${encodeURIComponent(typeof location !== 'undefined' ? location.protocol + '//' + location.host : "")}`, '_self')
  //     }}>Listen with them!</button>
  //     <br/>
  //     <Link href="/instructions" passHref>
  //       <button className={styles.button + " " + styles.subButton}>Download</button>
  //     </Link>
  //     <br/><br/><br/>
  //   </div>
  //   <div className={styles.footer}>
  //     <a href='https://github.com/pikokr/spotify-listen-together'>
  //       <FaGithub/>
  //     </a>
  //     <label>Made by <a href='https://github.com/FlafyDev'>FlafyDev</a> and edited by <a
  //         href="https://github.com/pikokr">pikokr</a></label>
  //     <label>Recommended client v{config.clientRecommendedVersion}</label>
  //   </div>
  // </div>
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen select-none gap-4">
      <div className="flex flex-col items-center gap-4">
        {host && songInfo?.name ? (
          <>
            <div className="text-3xl font-bold">
              {host.name} is listening to...
            </div>
            <Song song={songInfo} />
            <div className="flex gap-4 min-w-full">
              <button
                onClick={() =>
                  window.open(
                    `spotify:listentogether:${encodeURIComponent(
                      typeof location !== 'undefined'
                        ? location.protocol + '//' + location.host
                        : ''
                    )}`,
                    '_self'
                  )
                }
                className="bg-gradient-to-r font-bold flex-grow text-xl from-rose-400 via-fuchsia-500 to-indigo-500 flex justify-center items-center h-16 px-6 rounded-md transition-all hover:brightness-90 active:brightness-75"
              >
                Listen together!
              </button>
              <Link href={'/instructions'} passHref>
                <a className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 flex items-center justify-center h-16 rounded-md transition-all hover:brightness-90 active:brightness-75">
                  <FaQuestion size={24} />
                </a>
              </Link>
            </div>
            <ClientList listeners={clients} />
            <div className="p-4 rounded-md bg-stone-900 min-w-full text-center">
              <div>
                <span className="opacity-60 pr-2">Recommended client</span> v
                {config.clientRecommendedVersion}
              </div>
            </div>
            <div className="p-4 rounded-md bg-stone-900 min-w-full text-center">
              <div>
                Originally developed by{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400"
                  href="https://github.com/FlafyDev"
                >
                  FlafyDev
                </a>{' '}
                and edited by{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400"
                  href="https://github.com/pikokr"
                >
                  pikokr
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className="text-3xl font-bold">
            Currently not listening to music with Spotify!
          </div>
        )}
      </div>
    </div>
  )
}

export default Index
