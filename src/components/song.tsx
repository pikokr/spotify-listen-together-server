import SongInfo from '../../backend/web-shared/songInfo'
import { FaPause, FaPlay } from 'react-icons/fa'

const Song = (props: { song: SongInfo }) => {
  return (
    <div className="bg-stone-900 flex gap-8 rounded-md p-8 shadow-md min-w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={props.song.image || 'images/NoSong.png'}
        className="w-32 h-32 rounded-md"
        alt="Song"
        draggable="false"
      />
      <div className="flex flex-col gap-4 flex-grow">
        <div className="text-4xl font-bold flex-grow">
          {props.song.name || 'Unknown'}
        </div>
        <div className="flex justify-end">
          {props.song.paused ? <FaPause size={32} /> : <FaPlay size={32} />}
        </div>
      </div>
    </div>
  )
}

export default Song
